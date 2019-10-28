import validate from '../validattion/validate';

export function formHelper(namespace) {
  /** Actions */
  const SET_FORM_VALUE = `${namespace}/SET_FORM_VALUE`;
  function setFormValue(value) {
    return {
      type: SET_FORM_VALUE,
      payload: value
    };
  }

  const SET_FORM_ERROR = `${namespace}/SET_FORM_ERROR`;
  function setFormError(errors) {
    return {
      type: SET_FORM_ERROR,
      payload: errors
    };
  }

  const UPDATE_FORM_VALID = `${namespace}/UPDATE_FORM_VALID`;
  function updateFormValid() {
    return {
      type: UPDATE_FORM_VALID,
      payload: undefined
    };
  }

  function validateForm(fieldName) {
    return (dispatch, getState) => {
      // Validate
      let state = getState()[namespace];
      validateFormSync(dispatch, state, fieldName);

      // Async validate
      if (!validate.isEmpty(state.form.asyncConstrains)) {
        state = getState()[namespace];
        validateFormAsync(dispatch, state, fieldName);
      } else {
        // There is no async constrains, just update the form.valid
        dispatch(updateFormValid());
      }
    };
  }

  function validateFormSync(dispatch, state, fieldName) {
    // Validate constrains
    let { values, constrains } = state.form;
    if (fieldName) {
      // Validate a specific field
      values = {
        [fieldName]: state.form.values[fieldName]
      };
      constrains = {
        [fieldName]: state.form.constrains[fieldName]
      };
    }

    const formErrors = {};
    Object.keys(constrains).forEach(key => {
      formErrors[key] = undefined;
    });

    // Validate
    const errors = validate(values, constrains);
    if (errors) {
      // Get first error message only
      Object.keys(errors).forEach(key => {
        formErrors[key] = errors[key][0];
      });
    }
    console.log('Validated: ', formErrors);

    // Set state
    dispatch(setFormError(formErrors));
  }

  function validateFormAsync(dispatch, state, fieldName) {
    let { values, asyncConstrains } = state.form;
    if (fieldName) {
      // Validate a specific field
      values = {
        [fieldName]: state.form.values[fieldName]
      };
      asyncConstrains = {
        [fieldName]: state.form.asyncConstrains[fieldName]
      };
    }

    // Filter out the constrains that have error already (validated by validateFormSync)
    const constrains = {};
    Object.keys(asyncConstrains).forEach(key => {
      if (!state.form.errors[key]) {
        constrains[key] = asyncConstrains[key];
      }
    });

    // Do nothing if the constrains is empty
    if (validate.isEmpty(constrains)) {
      dispatch(updateFormValid());
      return;
    }

    validate
      .async(values, constrains)
      .then(attributes => {
        console.log('Async validated: ', undefined);
        dispatch(updateFormValid());
      })
      .catch(errors => {
        if (errors instanceof Error) {
          // An exception was thrown from a validator
          console.log('Error: ', errors);
        } else {
          const formErrors = {};
          Object.keys(constrains).forEach(key => {
            formErrors[key] = undefined;
          });

          // errors: {email: ['This email is used']}
          // Get first error message only
          Object.keys(errors).forEach(key => {
            formErrors[key] = errors[key][0];
          });
          console.log('Validated async: ', formErrors);

          // Set state
          dispatch(setFormError(formErrors));
          dispatch(updateFormValid());
        }
      });
  }

  function formReducer(state, action) {
    switch (action.type) {
      case SET_FORM_VALUE:
        // payload: {name: value}
        const value = action.payload;

        return {
          ...state,
          form: {
            ...state.form,
            values: {
              ...state.form.values,
              ...value
            }
          }
        };

      case SET_FORM_ERROR:
        // payload: {name1: error1, name2: error2}
        const errors = { ...state.form.errors };
        Object.keys(action.payload).forEach(name => {
          errors[name] = action.payload[name];
          if (errors[name] === undefined) {
            delete errors[name];
          }
        });
        return {
          ...state,
          form: {
            ...state.form,
            errors
          }
        };

      case UPDATE_FORM_VALID:
        // payload: undefined
        return {
          ...state,
          form: {
            ...state.form,
            valid: validate.isEmpty(state.form.errors)
          }
        };

      default:
        return undefined;
    }
  }

  return {
    SET_FORM_VALUE,
    SET_FORM_ERROR,
    UPDATE_FORM_VALID,

    setFormValue,
    setFormError,
    updateFormValid,
    validateForm,

    formReducer
  };
}

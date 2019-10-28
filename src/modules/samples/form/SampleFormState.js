// @flow

import axios from 'axios';
import validate from '../../../validattion/validate';
import { formHelper } from '../../../store/helpers';

const NAMESPACE = 'sampleForm';
const { setFormValue, validateForm, formReducer } = formHelper(NAMESPACE);

/** Types */
type StateType = {
  form: any,
  prop1: any
};

type ActionType = {
  type: string,
  payload?: any
};

/** Actions */
// Form actions
export { setFormValue, validateForm };

// Normal actions
export const ACTION1 = `${NAMESPACE}/ACTION1`;
export function action1(param1): ActionType {
  return {
    type: ACTION1,
    payload: param1
  };
}

// Async actions
export function asyncAction1(param1) {
  return (dispatch, getState) => {
    const state = getState()[NAMESPACE];

    // Do async requests here, then dispatch result on success callback
    // dispatch(action1(param1))
  };
}

/** Validators */
// Custom validators
validate.validators.customValidator = value => {
  if (value && !value.endsWith('@innerbus.com')) {
    return 'should end with @innerbus.com.';
  }
  return undefined;
};

// Async validators
validate.validators.asyncValidator = value => {
  return new validate.Promise((resolve, reject) => {
    axios
      .post('http://10.58.101.101:3000/validate-email', {
        email: value
      })
      .then(() => resolve())
      .catch(error => {
        if (error.response) {
          resolve('is used already.');
        } else {
          // Network error
          reject(error);
        }
      });
  });
};

/** Initial state */
const initialState: StateType = {
  form: {
    values: {
      email: undefined
    },
    constrains: {
      email: {
        presence: { allowEmpty: false },
        email: true,
        customValidator: true
      }
    },
    asyncConstrains: {
      email: {
        asyncValidator: true
      }
    },
    errors: {},
    valid: false
  }
};

/** Reducer */
export default function SampleFormStateReducer(
  state: StateType = initialState,
  action: ActionType
): StateType {
  const result = formReducer(state, action);
  if (result) {
    return result;
  }

  switch (action.type) {
    case ACTION1:
      return {
        ...state,
        prop1: action.payload
      };
    default:
      return state;
  }
}

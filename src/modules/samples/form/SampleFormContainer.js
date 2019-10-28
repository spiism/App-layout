// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SampleFormView from './SampleFormView';
import {
  setFormValue,
  validateForm,
  action1,
  asyncAction1
} from './SampleFormState';

type Props = {
  navigation: any,
  form: any,
  setForm: Function
};

class SampleFormContainer extends Component<Props> {
  render() {
    return <SampleFormView {...this.props} />;
  }
}

// Map actions and state to props
const mapActions = dispatch => ({
  setFormValue: field => dispatch(setFormValue(field)),
  validateForm: fieldName => dispatch(validateForm(fieldName)),
  action1: param1 => dispatch(action1(param1)),
  asyncAction1: param1 => dispatch(asyncAction1(param1))
});
const mapState = state => ({
  form: state.sampleForm.form,
  prop1: state.sampleForm.prop1
});
export default connect(
  mapState,
  mapActions
)(SampleFormContainer);

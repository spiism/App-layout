// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import AlertsView from './AlertsView'
import { action1, asyncAction1 } from './AlertsState'

type Props = {
  navigation: any,
  prop1: any,
  action1: Function,
  asyncAction1: Function
}

class AlertsContainer extends Component<Props> {
  render() {
    return (
      <AlertsView
        {...this.props}
      />
    )
  }
}

// Map actions and state to props
const mapActions = dispatch => ({
  action1: param1 => dispatch(action1(param1)),
  asyncAction1: param1 => dispatch(asyncAction1(param1))
});
const mapState = state => ({
  prop1: state.alerts.prop1
});
export default connect(
  mapState,
  mapActions
)(AlertsContainer);

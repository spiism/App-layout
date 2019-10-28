// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import BookingsView from './BookingsView'
import { action1, asyncAction1 } from './BookingsState'

type Props = {
  navigation: any,
  prop1: any,
  action1: Function,
  asyncAction1: Function
}

class BookingsContainer extends Component<Props> {
  render() {
    return (
      <BookingsView
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
  prop1: state.bookings.prop1
});
export default connect(
  mapState,
  mapActions
)(BookingsContainer);

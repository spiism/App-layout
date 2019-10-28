// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppView from './AppView';
import { setFirstOpen } from './AppState';

type Props = {};

class AppContainer extends Component<Props> {
  changeSetOpen = () => {
    this.setFirstOpen(false)
  };

  render() {
    return <AppView {...this.props} />;
  }
}

// Map actions and state to props
const mapActions = dispatch => ({
  setFirstOpen: isOpen => dispatch(setFirstOpen(isOpen))
});

const mapState = state => ({
  isFirstOpen: state.app.isFirstOpen
});

export default connect(
  mapState,
  mapActions
)(AppContainer);

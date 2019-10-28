import React, { Component } from 'react';
import SettingsView from './SettingsView';

export default class SettingsContainer extends Component {
  onProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  render() {
    return <SettingsView {...this.props} onProfile={this.onProfile} />;
  }
}

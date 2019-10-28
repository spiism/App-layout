import React, { Component } from 'react';
import ProfileView from './ProfileView';

export default class ProfileContainer extends Component {
  onEditProfile = () => {
    this.props.navigation.navigate('Editprofile');
  };

  onProfileDetail = () => {
    this.props.navigation.navigate('ProfileDetail');
  };

  render() {
    return (
      <ProfileView
        {...this.props}
        onEdit={this.onEditProfile}
        onProfileDetail={this.onProfileDetail}
      />
    );
  }
}

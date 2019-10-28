// @flow
import React, { Component } from 'react';
import AuthView from './AuthView';

type Props = {};

class AuthContainer extends Component<Props> {
  onNavigateLogin = () => {
    this.props.navigation.navigate('Login');
  };

  onNavigateSignUp1 = () => {
    this.props.navigation.navigate('SignUp1');
  };

  render() {
    return (
      <AuthView
        onNavigateLogin={this.onNavigateLogin}
        onNavigateSignUp1={this.onNavigateSignUp1}
      />
    );
  }
}

export default AuthContainer;

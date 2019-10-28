// @flow
import React, { Component } from 'react';
import axios from 'axios'
import LoginView from './LoginView';

type Props = {};

class LoginContainer extends Component<Props> {
  onLogin = () => {
    if (this.props.form.valid) {
      axios.post('http://52.64.6.170:8080/api/authentication/login', {
        loginId: this.props.form.username,
        password: this.props.form.password
      }).then(() => {
        // Successful: navigate to App
        console.log('Login successfully')
        this.props.navigation.navigate('App');
      }).catch((error) => {
        // Show the
        console.log('Error while login: ', error)
      })
    }
  };

  onNavigateSignUp = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <LoginView
        onLogin={this.onLogin}
        onNavigateRegister={this.onNavigateSignUp}
      />
    );
  }
}

export default LoginContainer;

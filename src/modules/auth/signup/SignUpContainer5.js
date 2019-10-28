// @flow
import React, { Component } from 'react';
import SignUpView5 from './SignUpView5';

type Props = {};

class SignUpContainer5 extends Component<Props> {
  onNavigateNext = () => {
    this.props.navigation.navigate('SignUp6');
  };

  render() {
    return <SignUpView5 onNavigateNext={this.onNavigateNext} />;
  }
}

export default SignUpContainer5;

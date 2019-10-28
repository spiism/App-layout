// @flow
import React, { Component } from 'react';
import SignUpView3 from './SignUpView3';

type Props = {};

class SignUpContainer3 extends Component<Props> {
  onNavigateNext = () => {
    this.props.navigation.navigate('SignUp4');
  };

  render() {
    return <SignUpView3 onNavigateNext={this.onNavigateNext} />;
  }
}

export default SignUpContainer3;

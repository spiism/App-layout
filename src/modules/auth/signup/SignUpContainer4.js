// @flow
import React, { Component } from 'react';
import SignUpView4 from './SignUpView4';

type Props = {};

class SignUpContainer4 extends Component<Props> {
  onNavigateNext = () => {
    this.props.navigation.navigate('SignUp5');
  };

  render() {
    return <SignUpView4 onNavigateNext={this.onNavigateNext} />;
  }
}

export default SignUpContainer4;

// @flow
import React, { Component } from 'react';
import SignUpView1 from './SignUpView1';

type Props = {};

class SignUpContainer1 extends Component<Props> {
  onNavigateNext = () => {
    this.props.navigation.navigate('SignUp2');
  };

  render() {
    return <SignUpView1 onNavigateNext={this.onNavigateNext} />;
  }
}

export default SignUpContainer1;

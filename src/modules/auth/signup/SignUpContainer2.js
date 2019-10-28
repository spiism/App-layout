// @flow
import React, { Component } from 'react';
import SignUpView2 from './SignUpView2';

type Props = {};

class SignUpContainer2 extends Component<Props> {
  onNavigateNext = () => {
    console.log(('Next'))
    this.props.navigation.navigate('SignUp3');
  };

  render() {
    return <SignUpView2 onNavigateNext={this.onNavigateNext} />;
  }
}

export default SignUpContainer2;

// @flow
import React, { Component } from 'react';
import SignUpView6 from './SignUpView6';

type Props = {};

class SignUpContainer6 extends Component<Props> {
  onNavigateNext = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    return <SignUpView6 onNavigateNext={this.onNavigateNext} />;
  }
}

export default SignUpContainer6;

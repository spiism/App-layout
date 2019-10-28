import React, { Component } from 'react';
import AppNavigator from '../navigation/AppNavigator';

type Props = {};
export default class AppView extends Component<Props> {
  render() {
    return <AppNavigator onNavigationStateChange={() => {}} uriPrefix="/app" />;
  }
}

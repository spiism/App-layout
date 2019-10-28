import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileContainer from '../profile/ProfileContainer';

export default createStackNavigator({
  Home: {
    screen: ProfileContainer,
    navigationOptions: ({ navigation }) => {
      return {
      };
    }
  },
});

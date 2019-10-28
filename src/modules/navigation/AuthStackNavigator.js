import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Body, Button, Row, Icon, Left, Right, Title } from 'native-base';
import { View } from 'react-native'
import AuthContainer from '../auth/AuthContainer';
import LoginContainer from '../auth/login/LoginContainer';
import SignUpContainer1 from '../auth/signup/SignUpContainer1';
import SignUpContainer2 from '../auth/signup/SignUpContainer2';
import SignUpContainer3 from '../auth/signup/SignUpContainer3';
import SignUpContainer4 from '../auth/signup/SignUpContainer4';
import SignUpContainer5 from '../auth/signup/SignUpContainer5';
import SignUpContainer6 from '../auth/signup/SignUpContainer6';

export default createStackNavigator(
  {
    Authentication: {
      screen: AuthContainer,
      navigationOptions: {
        headerTitle: 'Home'
      }
    },
    Login: {
      screen: LoginContainer,
      navigationOptions: {
        headerTitle: 'Log In'
      }
    },
    SignUp1: {
      screen: SignUpContainer1,
      navigationOptions: {
        headerTitle: 'Sign Up'
      }
    },
    SignUp2: {
      screen: SignUpContainer2,
      navigationOptions: {
        headerTitle: 'Sign Up'
      }
    },
    SignUp3: {
      screen: SignUpContainer3,
      navigationOptions: {
        headerTitle: 'Sign Up'
      }
    },
    SignUp4: {
      screen: SignUpContainer4,
      navigationOptions: {
        headerTitle: 'Sign Up'
      }
    },
    SignUp5: {
      screen: SignUpContainer5,
      navigationOptions: {
        headerTitle: 'Sign Up'
      }
    },
    SignUp6: {
      screen: SignUpContainer6,
      navigationOptions: {
        headerTitle: 'Sign Up'
      }
    }
  },
  {
    initialRouteName: 'Authentication',
    defaultNavigationOptions: ({ navigation }) => {
      return ({
        headerLeft: null,
        headerRight: (
          <Right>
            {navigation.state.routeName !== 'Authentication' && (
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
            )}
            <Button transparent>
              <Icon type="Entypo" name="dots-three-vertical" />
            </Button>
          </Right>
        )
      })
    }
  }
);

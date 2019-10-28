import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Header, Left, Button, Icon, Body, Title, Right, Text } from 'native-base'
import AlertsContainer from '../alerts/AlertsContainer';

export default createStackNavigator(
  {
    Alerts: {
      screen: AlertsContainer,
      navigationOptions: {
        headerTitle: 'Alerts'
      }
    }
  },
  {
    defaultNavigationOptions:  ({ navigation }) => ({
      headerLeft: null,
      headerRight: (
        <Right>
          <Button transparent>
            <Icon type="Entypo" name="dots-three-vertical" />
          </Button>
        </Right>
      )
    })
  }
);

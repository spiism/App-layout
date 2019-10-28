import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Header, Left, Button, Icon, Body, Title, Right, Text } from 'native-base'
import JourneyContainer from '../journey/JourneyContainer';
import { DrawerActions } from 'react-navigation-drawer';

export default createStackNavigator(
  {
    JourneyHome: {
      screen: JourneyContainer,
      navigationOptions: {
        headerTitle: 'Journey'
      }
    }
  },
  {
    defaultNavigationOptions:  ({ navigation }) => {
      console.log(navigation)
      return ({
        headerLeft: null,
        headerRight: (
          <Right>
            <Button transparent onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon type="Entypo" name="dots-three-vertical" />
            </Button>
          </Right>
        )
      })
    }
  }
);

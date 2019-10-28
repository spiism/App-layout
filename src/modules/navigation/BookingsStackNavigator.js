import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Header, Left, Button, Icon, Body, Title, Right, Text } from 'native-base'
import BookingsContainer from '../bookings/BookingsContainer';

export default createStackNavigator(
  {
    JourneyHome: {
      screen: BookingsContainer,
      navigationOptions: {
        headerTitle: 'Bookings'
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

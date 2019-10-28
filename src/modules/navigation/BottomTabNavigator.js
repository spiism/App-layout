/* eslint-disable import/no-unresolved */
import React from 'react';
import { Footer, FooterTab, Button, Text, Icon, Right } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import JourneyStackNavigator from './JourneyStackNavigator';
import ChatStackNavigator from './ChatStackNavigator';
import AlertsStackNavigator from './AlertsStackNavigator';
import BookingsStackNavigator from './BookingsStackNavigator';

export default createBottomTabNavigator(
  {
    Journey: {
      screen: JourneyStackNavigator,
      navigationOptions: {
      }
    },
    Chat: {
      screen: ChatStackNavigator,
      navigationOptions: {
      }
    },
    Alerts: {
      screen: AlertsStackNavigator,
      navigationOptions: {
      }
    },
    Bookings: {
      screen: BookingsStackNavigator,
      navigationOptions: {
      }
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
    }),
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate('Journey')}
            >
              <Icon name="compass" />
              <Text>Journey</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate('Chat')}
            >
              <Icon type="MaterialIcons" name="message" />
              <Text>Chat</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate('Alerts')}
            >
              <Icon type="FontAwesome" name="bell" />
              <Text>Alerts</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 3}
              onPress={() => props.navigation.navigate('Bookings')}
            >
              <Icon type="MaterialCommunityIcons" name="calendar-month" />
              <Text>Bookings</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
    tabBarOptions: {
      activeTintColor: '#827717',
      style: {
        backgroundColor: 'white',
      }
    }
  }
);

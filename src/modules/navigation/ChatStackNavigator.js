import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Header, Left, Button, Icon, Body, Title, Right, Text } from 'native-base'
import ChatContainer from '../chat/ChatContainer';

export default createStackNavigator(
  {
    ChatHome: {
      screen: ChatContainer,
      navigationOptions: {
        headerTitle: 'Chat'
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

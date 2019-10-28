import { createStackNavigator } from 'react-navigation-stack';

import bottomTabNavigator from './BottomTabNavigator';
import SettingsContainer from '../settings/SettingsContainer';
import profileStackNavigator from './ProfileStackNavigator';

export default createStackNavigator(
  {
    Main: {
      screen: bottomTabNavigator,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    defaultNavigationOptions: () => ({
    })
  }
);

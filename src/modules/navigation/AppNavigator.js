import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import authStackNavigator from './AuthStackNavigator';
import drawerNavigator from './DrawerNavigator';


export default createAppContainer(
  createSwitchNavigator(
    {
      App: drawerNavigator,
      Auth: authStackNavigator
    },
    {
      initialRouteName: 'App'
    }
  )
);

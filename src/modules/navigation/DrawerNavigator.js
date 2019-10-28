import { createDrawerNavigator } from 'react-navigation-drawer';
import homeStackNavigator from './HomeStackNavigator';
import AboutContainer from '../about/AboutContainer';
import ContactContainer from '../contact/ContactContainer';
import profileStackNavigator from './ProfileStackNavigator';
import SettingsContainer from '../settings/SettingsContainer';
import alertsStackNavigator from './AlertsStackNavigator';
import bookingsStackNavigator from './BookingsStackNavigator';

export default createDrawerNavigator({
  Home: {
    screen: homeStackNavigator,
    navigationOptions: {
      drawerLabel: null
    }
  },
  Settings: {
    screen: SettingsContainer,
    navigationOptions: {
      drawerLabel: 'Settings'
    }
  },
  Notifications: {
    screen: alertsStackNavigator,
    navigationOptions: {
      drawerLabel: 'Notifications'
    }
  },
  Bookings: {
    screen: bookingsStackNavigator,
    navigationOptions: {
      drawerLabel: 'Booked Rides'
    }
  },
  Tripagram: {
    screen: bookingsStackNavigator,
    navigationOptions: {
      drawerLabel: 'Tripagram'
    }
  },
  Profile: {
    screen: profileStackNavigator,
    navigationOptions: {
      drawerLabel: 'Profile'
    }
  },
  Logout: {
    screen: SettingsContainer,
    navigationOptions: {
      drawerLabel: 'Logout'
    }
  },
  About: {
    screen: AboutContainer,
    navigationOptions: {
      drawerLabel: 'About'
    }
  },
  Help: {
    screen: ContactContainer,
    navigationOptions: {
      drawerLabel: 'Help'
    }
  },
}, {
  drawerBackgroundColor: '#827717',
  drawerPosition: 'right',
  contentOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#fff'
  }
});

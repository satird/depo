import React from 'react';
import store from '../store';
import {createMaterialTopTabNavigator, createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

import Page1 from '../screens/Page1';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';
import Page4 from '../screens/Page4';
import Page5 from '../screens/Page5';
import Friends from '../screens/Page5';
import {COLORS} from '../themes';
import {toggleTheme} from '../actions';

import {normalizedComments} from '../base/fixtures';

const tabBarOptions = Platform.OS === 'ios'
  ? {
    // iOS tabBarOptions
    showLabel: true
  }
  : {
    // Android tabBarOptions
    showIcon: true,
    showLabel: true
  }

const commonTabOptions = color => ({
  activeTintColor: '#57b276',
  pressColor: '#fff',
  labelStyle: {
    fontSize: 12
  },
  style: {
    backgroundColor: color
  },
  inactiveTintColor: '#777777',
  // inactiveBackgroundColor: '#171717',
  // activeBackgroundColor: '#171717',
});

const CustomerTabNavigator = createBottomTabNavigator({
  Tab1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'Lifestyle',
      tabBarIcon: ({tintColor}) => (<Icon name="ios-calendar" color={tintColor} size={23}/>),
      tabBarOptions: commonTabOptions(COLORS.dark.hexCode),
      activeTintColor: '#ffffff',
      inactiveTintColor: '#808080',
      tabBarOnPress: ({_, defaultHandler}) => {
        store.dispatch(toggleTheme(COLORS.light));
        defaultHandler();
      }
    }
  },
  Tab2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'Рестораны',
      tabBarIcon: ({tintColor}) => (<Icon name="md-restaurant" color={tintColor} size={23}/>),
      tabBarOptions: commonTabOptions(COLORS.light.hexCode),
      tabBarOnPress: ({_, defaultHandler}) => {
        store.dispatch(toggleTheme(COLORS.dark));
        defaultHandler();
      }
    }
  },
  Tab3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: 'Рынок',
      tabBarIcon: ({tintColor}) => (<Icon name="md-basket" color={tintColor} size={23}/>),
      tabBarOptions: commonTabOptions(COLORS.light.hexCode),
      tabBarOnPress: ({_, defaultHandler}) => {
        store.dispatch(toggleTheme(COLORS.dark));
        defaultHandler();
      }
    }
  },
  Tab4: {
    screen: Page4,
    navigationOptions: {
      tabBarLabel: 'Схема',
      tabBarIcon: ({tintColor}) => (<Icon name="md-map" color={tintColor} size={23}/>),
      tabBarOptions: commonTabOptions(COLORS.light.hexCode),
      tabBarOnPress: ({_, defaultHandler}) => {
        store.dispatch(toggleTheme(COLORS.dark));
        defaultHandler();
      }
    }
  },
  Tab5: {
    screen: Page5,
    navigationOptions: {
      tabBarLabel: 'Аккаунт',
      tabBarIcon: ({tintColor}) => (<Icon name="ios-contact" color={tintColor} size={23}/>),
      tabBarOptions: commonTabOptions(COLORS.light.hexCode),
      tabBarOnPress: ({_, defaultHandler}) => {
        store.dispatch(toggleTheme(COLORS.dark));
        defaultHandler();
      }
    }
  }
}, {tabBarPosition: 'bottom'});

const App = createAppContainer(CustomerTabNavigator);

export default App;

// export default CustomerTabNavigator;

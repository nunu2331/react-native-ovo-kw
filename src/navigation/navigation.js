import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screen/dashboard';
import Deals from '../screen/deals';
import Scan from '../screen/scan';
import Finance from '../screen/finance';
import Profile from '../screen/profile';
import SearchScreen from '../screen/search';






const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { borderTopWidth: 0 },
        keyboardHidesTabBar: true,
        // activeBackgroundColor: 'white',
        // inactiveBackgroundColor: 'white',
        

      }} >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? '#502DC6' : 'gray' }]}
              source={focused == true ? require('../assets/home.png') : require('../assets/home.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Deals"
        component={Deals}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? '#502DC6' : 'gray' }]}
              source={focused == true ? require('../assets/label.png') : require('../assets/label.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? '#502DC6' : 'gray' }]}
              source={focused == true ? require('../assets/scan.png') : require('../assets/scan.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Finance"
        component={Finance}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? '#502DC6' : 'gray' }]}
              source={focused == true ? require('../assets/rupiah.png') : require('../assets/rupiah.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={[styles.bottomTabIcon, { tintColor: focused ? '#502DC6' : 'gray' }]}
              source={focused == true ? require('../assets/user.png') : require('../assets/user.png')
              } />
          ),
          tabBarLabel: ''
        }}
      />
    </Tab.Navigator>
  );
}

const MainStackNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashboardStack" component={BottomTabNavigator} options={{
        headerShown: false
      }} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  )
}

export default MainStackNavigator

const styles = StyleSheet.create({

  bottomTabIcon: {
    display: 'flex',
    width: 22,
    height: 22,
    padding: 5,
    // marginVertical: 5,
    marginTop: 25,
    marginBottom: 10,
    borderTopWidth: 3,
  },
});
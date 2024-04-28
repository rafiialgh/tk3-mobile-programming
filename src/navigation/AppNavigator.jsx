import * as React from 'react'
import {FontAwesome, Entypo} from '@expo/vector-icons'
import {DefaultTheme, NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import ReportScreen from '../screens/ReportScreen'

const Tab = createBottomTabNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF4E4E',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
}

export default function AppNavigator() {
  return (
      <NavigationContainer theme={theme}>
        <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home"
                      component={HomeScreen}
                      options={{
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome name="user" size={size} color={color}/>
                        )
                      }}></Tab.Screen>
          <Tab.Screen name="Report"
                      component={ReportScreen}
                      options={{
                        tabBarIcon: ({color, size}) => (
                            <Entypo name="text-document" size={size} color={color} />
                        )
                      }}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  )
}
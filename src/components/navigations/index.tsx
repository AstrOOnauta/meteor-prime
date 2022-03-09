import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import {MaterialCommunityIcons} from '@expo/vector-icons'

import StackRoutes from './stackRoutes'
import Movies from '../pages/Movies'

const Drawer = createDrawerNavigator()

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {backgroundColor: '#090A0E', paddingTop: 20},
        drawerActiveBackgroundColor: '#FBB034',
        drawerActiveTintColor: '#090A0E',
        drawerInactiveTintColor: '#F2F0F5',
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'movie-open' : 'movie-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          title: 'My movies',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'archive' : 'archive-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

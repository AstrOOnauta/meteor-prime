import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../pages/Home'
import Detail from '../pages/Detail'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false, title: 'Detalhes'}}
      />
    </Stack.Navigator>
  )
}

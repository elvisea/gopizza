import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '@screens/SignIn'
import { Home } from '@screens/Home';
const { Navigator, Screen } = createNativeStackNavigator()


export function UserStackRoutes() {
  return (
    <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
      <Screen name='SignIn' component={SignIn} />
    </Navigator>
  )
}

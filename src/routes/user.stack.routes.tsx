import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home';
import { SignIn } from '@screens/SignIn'
import { Product } from '@screens/Product';

const { Navigator, Screen } = createNativeStackNavigator()

export const UserStackRoutes = () => (
  <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
    <Screen name='Home' component={Home} />
    {/* <Screen name='SignIn' component={SignIn} /> */}
    <Screen name='SignIn' component={Product} />
  </Navigator>
)


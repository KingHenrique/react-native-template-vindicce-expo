import React from 'react'
import * as views from '../views'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  // Insert views here
  Home: { screen: views.Home }
})

export default createAppContainer(AppNavigator)

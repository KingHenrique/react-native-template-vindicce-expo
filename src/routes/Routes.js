import React from 'react'
import * as views from '../views'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  Home: { screen: views.Home },
  // Insert views here
},{
  headerMode: "none"
})

export default createAppContainer(AppNavigator)

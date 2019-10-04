import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { setNavigator } from './utils/navigation'
import Routes from './routes/Routes'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { setNavigator } from './src/utils/navigation'
import Routes from './src/routes/Routes'
import store from './src/redux/store'
import './src/configs/ReactotronConfig'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    )
  }
}

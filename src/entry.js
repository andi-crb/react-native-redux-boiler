import React from 'react'
import {
  AppRegistry
} from 'react-native'
import App from './containers/App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Topbar from './components/Topbar.js'
import Button from './components/Button.js'

export default function native () {
  // remove warnings overlay
  console.disableYellowBox = true // eslint-disable-line no-console

  render: function() {
      return (
        <Topbar/>
        <Button/>
      )
  }
  
  AppRegistry.registerComponent('OnsiteHire', () => OnsiteHire)
}

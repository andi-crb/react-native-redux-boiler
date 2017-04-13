import React from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './Topbar.styles'

const Button = () => (
  <Button
    onPress={onPressLoadDrinks}
    title="Press Me!"
    color="#841584"
    accessibilityLabel="press me"
  />
)

export default Button

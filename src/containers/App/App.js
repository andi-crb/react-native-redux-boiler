import React from 'react'
import {
  View,
  Image,
  Text
} from 'react-native'
import styles from './App.styles.js'
import Topbar from '../../components/Topbar'
import Button from '../../components/Button'

export default () => (
  <View style={styles.container}>
    <Topbar />
    <Image
      style={{
        width: 350,
        height: 200,
        paddingTop: 0,
        marginTop: 0
      }}
      resizeMode={'cover'}
      source={{ uri: 'https://unsplash.it/600/400/?random' }}
    />
    <Button />
  </View>
)

import React from 'react'
import {
  styles,
  TouchableOpacity,
  View,
  Text,
  Image,
  Button,
} from 'react-native'

export default function FlatButton({ text }) {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

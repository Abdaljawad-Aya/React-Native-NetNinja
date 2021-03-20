import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Button,
} from 'react-native'

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

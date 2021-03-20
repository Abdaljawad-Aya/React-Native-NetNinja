import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcon } from '@expo/vector-icons'

export default function Header() {
  return (
    <View style={StyleSheet.header}>
      {/* icon for the menu */}
      <View>
        <Text style={StyleSheet.headerText}></Text>
      </View>
    </View>
  )
}

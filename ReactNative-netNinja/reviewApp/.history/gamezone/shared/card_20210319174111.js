import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card(props) {
  return (
    <View style={StyleSheet.card}>
      <View style={StyleSheet.cardContent}>{props.children}</View>
    </View>
  )
}

;<Card>
  <Text>Hello</Text>
  <Text>Hello again</Text>
</Card>

import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card(props) {
  return (
    <View style={StyleSheet.card}>
      <View style={StyleSheet.cardContent}>{props.children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
  },
  cardContent: {},
})

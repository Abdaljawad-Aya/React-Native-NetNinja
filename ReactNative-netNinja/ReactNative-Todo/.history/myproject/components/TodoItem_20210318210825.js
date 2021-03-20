import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function TodoItem(item) {
  return (
    <TouchableOpacity>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
})

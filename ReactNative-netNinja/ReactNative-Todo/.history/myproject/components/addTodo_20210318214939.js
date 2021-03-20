import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'

export default function AddTodo() {
  const [text, setText] = useState('')
  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View>
      <TextInput
        style={StyleSheet.input}
        placeholder="new todo ..."
        onChangeText={changeHandler}
      />
    </View>
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

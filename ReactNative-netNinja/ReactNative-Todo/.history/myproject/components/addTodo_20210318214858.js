import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'

export default function AddTodo() {
  const [text, setText] = useState('')
  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View>
      <TextInput placeholder="new todo ..." onChangeText={changeHandler} />
    </View>
  )
}

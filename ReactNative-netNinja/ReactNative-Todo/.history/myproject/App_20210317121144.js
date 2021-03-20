import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Task List" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

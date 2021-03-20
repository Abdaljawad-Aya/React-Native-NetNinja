import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      {/*Header  */}
      <View style={styles.content}>
        {/* Todo form */}
        <View style={styles.list}></View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

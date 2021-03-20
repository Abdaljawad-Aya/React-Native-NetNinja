import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      {/*Header  */}
      <View style={styles.content}>
        {/* Todo form */}
        <View style={styles.list}>
          <FlatList />
        </View>
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

import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Touchable,
} from 'react-native'

export default function App() {
  const pressHandler = (id) => {
    console.log(id)
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id)
    })
  }
  return <View style={styles.container}></View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 20,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
  // input: {
  //   // borderWidth: 1,
  //   // borderColor: '#777',
  //   // padding: 8,
  //   // margin: 10,
  //   // width: 200,
  // },
})

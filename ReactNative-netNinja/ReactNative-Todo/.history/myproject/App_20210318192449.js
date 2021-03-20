import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native'

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'maria', key: '3' },
    { name: 'peach', key: '4' },
    { name: 'browser', key: '5' },
    { name: 'jamie', key: '6' },
    { name: 'jello', key: '7' },
    { name: 'john', key: '8' },
    { name: 'smith', key: '9' },
    { name: 'don', key: '10' },
  ])

  return (
    <View style={styles.container}>
      <FlatList />
      {/* <ScrollView>
        {people.map((item) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  )
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
  },
  // input: {
  //   // borderWidth: 1,
  //   // borderColor: '#777',
  //   // padding: 8,
  //   // margin: 10,
  //   // width: 200,
  // },
})

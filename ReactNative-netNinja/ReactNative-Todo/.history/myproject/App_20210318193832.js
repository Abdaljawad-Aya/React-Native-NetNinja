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
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'maria', id: '3' },
    { name: 'peach', id: '4' },
    { name: 'browser', id: '5' },
    { name: 'jamie', id: '6' },
    { name: 'jello', id: '7' },
    { name: 'john', id: '8' },
    { name: 'smith', id: '9' },
    { name: 'don', id: '10' },
  ])

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
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

import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.boldText}>
//           Hello World <Text>test</Text>{' '}
//         </Text>
//       </View>
//       <View style={styles.body}>
//         <Text style={styles.boldText}>
//           Lorem <Text>hh</Text> ipsum dolor sit amet, consectetur
//         </Text>
//         <Text>Lorem ipsum dolor sit amet, consectetur</Text>
//         <Text>Lorem ipsum dolor sit amet, consectetur</Text>
//       </View>
//     </View>
//   )
// }

// export default function App() {
//   const [name, setName] = useState('Ayah')
//   const [person, setPerson] = useState({ name: 'mario', age: 40 })

//   const clickHandler = () => {
//     setName('Jet-li')
//     setPerson({ name: 'luigi', age: 45 })
//   }
//   return (
//     <View style={styles.container}>
//       <Text>My name is {name}</Text>
//       <Text>
//         His name is {person.name} and his age {person.age}
//       </Text>
//       <View style={styles.buttonContainer}>
//         <Button title="update state" onPress={clickHandler} />
//       </View>
//     </View>
//   )
// }

export default function App() {
  // const [name, setName] = useState('Ayah')
  // const [person, setPerson] = useState({ name: 'mario', age: 40 })
  // const [age, setAge] = useState('30')
  const [people, setPeople] = useState([
    { name: 'Jet li', key: '1' },
    { name: 'yashi', key: '2' },
    { name: 'luigi', key: '3' },
    { name: 'peach', key: '4' },
    { name: 'toad', key: '5' },
    { name: 'browser', key: '6' },
  ])

  // const clickHandler = () => {
  //   setName('Jet-li')
  //   setPerson({ name: 'luigi', age: 45 })
  // }
  return (
    <View style={styles.container}>
      {people.map((item) => {
        return (
          <View>
            <Text>{item.name}</Text>
          </View>
        )
      })}
      {/* <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Name"
        onChangeText={(val) => setName(val)}
      />

      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Age"
        onChangeText={(val) => setAge(val)}
      />
      <Text>
        {' '}
        name: {name} , age: {age}
      </Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  // buttonContainer: {
  //   marginTop: 20,
  // },
  // header: {
  //   backgroundColor: 'pink',
  //   padding: 20,
  // },
  // boldText: {
  //   fontWeight: 'bold',
  // },
  // body: {
  //   backgroundColor: 'yellow',
  //   padding: 20,
  //   fontWeight: 'bold',
  // },
})

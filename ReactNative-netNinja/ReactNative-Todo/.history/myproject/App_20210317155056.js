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
  const [name, setName] = useState('Ayah')
  // const [person, setPerson] = useState({ name: 'mario', age: 40 })
  const [age, setAge] = useState('30')

  const clickHandler = () => {
    setName('Jet-li')
    setPerson({ name: 'luigi', age: 45 })
  }
  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput style={styles.input} />

      <Text>
        {' '}
        name: {name} , age: {age}
      </Text>
      <Button title="update state" onPress={clickHandler} />
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

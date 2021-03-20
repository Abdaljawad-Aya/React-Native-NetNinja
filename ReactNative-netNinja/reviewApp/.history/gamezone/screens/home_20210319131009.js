import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetails')
  //   // navigation.push('ReviewDetails'); for more complex apps
  // }
  const [reviews, setReviews] = useState([
    {
      title: 'Zedia, Breath of fresh air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ])
  return (
    // <View style={globalStyles.container}>
    //   <Text style={globalStyles.titleText}>Home Screen</Text>
    //   <Button title="go to review dets" onPress={pressHandler} />
    // </View>
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

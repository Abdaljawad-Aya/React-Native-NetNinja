import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'

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
      <Modal visible={false}>
        <View style={StyleSheet.modalContent}>
          <Text>Hello From the Modal :)</Text>
        </View>
      </Modal>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

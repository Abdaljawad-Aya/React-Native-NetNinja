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
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm'

export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetails')
  //   // navigation.push('ReviewDetails'); for more complex apps
  // }

  const [modalOpen, setModalOpen] = useState(false)
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

  const addReview = (review) => {
    review key = Math.random().toString();
  }
  return (
    // <View style={globalStyles.container}>
    //   <Text style={globalStyles.titleText}>Home Screen</Text>
    //   <Button title="go to review dets" onPress={pressHandler} />
    // </View>
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          {/* <Text>Hello From the Modal :)</Text> */}
          <ReviewForm />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
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

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
})

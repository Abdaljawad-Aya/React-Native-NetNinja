import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'
export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetails')
  //   // navigation.push('ReviewDetails'); for more complex apps
  // }
  const [reviews, setReviews] = useState({
    {title: 'Zedia, Breath of fresh air' , rating:5, body: 'lorem ipsum', key:'1'}
    {title: 'Zedia, Breath of fresh air' , rating:5, body: 'lorem ipsum', key:'1'}
    {title: 'Zedia, Breath of fresh air' , rating:5, body: 'lorem ipsum', key:'1'}
  })
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="go to review dets" onPress={pressHandler} />
    </View>
  )
}

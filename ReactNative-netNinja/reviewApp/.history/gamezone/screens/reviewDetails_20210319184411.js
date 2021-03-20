import React from 'react'
import { StyleSheet, View, Text , Image } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'
export default function ReviewDetails({ navigation }) {
  // const pressHandler = () => {
  //   navigation.goBack()
  // }
  return (
      <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          { navigation.getParam('title') }
        </Text>
        <Text>{ navigation.getParam('body') }</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  )
}


const styles = StyleSheet.create({

})
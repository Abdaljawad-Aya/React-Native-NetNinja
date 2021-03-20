import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer()
  }
  return (
    <View style={styles.header}>
      <MaterialCommunityIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Image source={require('../assets/heart_logo.png')}></Image>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
})

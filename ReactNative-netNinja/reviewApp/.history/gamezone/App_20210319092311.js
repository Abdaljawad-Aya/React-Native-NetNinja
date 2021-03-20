// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import * as Font from 'expo-font'
import About from './screens/about'
import Home from './screens/home'

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  })
}
export default function App() {
  return <Home />
}

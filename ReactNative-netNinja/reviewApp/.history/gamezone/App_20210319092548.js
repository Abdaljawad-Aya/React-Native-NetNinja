// import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import * as Font from 'expo-font'
import About from './screens/about'
import Home from './screens/home'

const getFonts = () =>
  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  return <Home />
}

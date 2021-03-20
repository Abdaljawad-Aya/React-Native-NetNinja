// import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'

// import About from './screens/about'
import Home from './screens/home'
import { AppLoading } from 'expo'
const getFonts = () =>
  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return <Home />
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    )
  }
}

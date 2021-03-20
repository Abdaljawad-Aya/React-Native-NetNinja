import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
const screens = {
  About: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
      // headerStyle: { backgroundColor: '#eee' },
    },
  },
}
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  },
})

export default AboutStack

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
      headerStyle: { backgroundColor: 'lightBlue' },
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    },
  },
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)

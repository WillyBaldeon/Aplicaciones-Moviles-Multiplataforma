import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import ProfileScreen from './src/screens/Profile';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    path: 'home/',
    navigationOptions: {
      title: 'Inicio'
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: 'Detalles'
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Perfil'
    }
  }
},
{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: 'Otra',
    navigationOptions: {
      backgroundColor: '#1e6cf4',
    },
    headerStyle: {
      backgroundColor: '#1e6cf4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);

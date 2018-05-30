import {StackNavigator} from 'react-navigation';
import Post from '../screens/stack-based/posts';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const routeConfig ={
    PostScreen: {screen: Post }
}

const stackNavigatorConfig = {
    initialRouteName: 'PostScreen',
    mode: 'card', // modal - card
    navigationOptions: {
      gesturesEnabled: false,
      headerTintColor: 'white',
      headerBackTitle: '',
      headerStyle: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
        elevation: 0,
        shadowRadius: 0,
        shadowOffset: {
          height: 0
        }
      },
      headerTitleStyle: {
        alignSelf: 'center',
        width: width * 0.86,
        textAlign: 'center',
        fontSize: 19,
        
      }
    }
  };
  
const AppNavigator = StackNavigator(routeConfig, stackNavigatorConfig);
export default AppNavigator;
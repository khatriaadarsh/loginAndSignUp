import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';
import {HeaderBackButton} from '@react-navigation/elements';

const Stack = createNativeStackNavigator();

const StackNaigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <Stack.Screen
        name="SignIn"
        options={{headerShown: false}}
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        options={{headerShown: false}}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <StackNaigation />
    </NavigationContainer>
  );
};

export default App;

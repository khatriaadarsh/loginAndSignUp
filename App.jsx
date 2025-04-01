import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';
import APIIntegration from './src/Screens/APIIntegration';
import TicTacToe from './src/TicTacToe';

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
      <Stack.Screen
        name="APIIntegration"
        options={{headerShown: false}}
        component={APIIntegration}
      />
      <Stack.Screen
        name="TicTacToe"
        options={{headerShown: false}}
        component={TicTacToe}
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

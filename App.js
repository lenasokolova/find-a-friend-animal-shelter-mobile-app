import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ShelterScreen from './screens/ShelterScreen';
import PetScreen from './screens/PetScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Screens */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />


        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shelter" component={ShelterScreen} />
        <Stack.Screen name="Pet" component={PetScreen} />



      </Stack.Navigator>

    </NavigationContainer>
  );
}
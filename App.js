import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ShelterScreen from './screens/ShelterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shelter" component={ShelterScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
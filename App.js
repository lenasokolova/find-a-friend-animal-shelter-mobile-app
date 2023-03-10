import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ShelterScreen from './screens/ShelterScreen';
import PetScreen from './screens/PetScreen';
import FormsScreen from './screens/FormsScreen';
import SettingsScreen from './screens/SettingsScreen';
import AddPetToShelterScreen from './screens/AddPetToShelterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Screens */}
        {/* <Stack.Screen name="Forms" component={FormsScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="AddPet" component={AddPetToShelterScreen} />




        <Stack.Screen name="Shelter" component={ShelterScreen} />
        <Stack.Screen name="Pet" component={PetScreen} />



      </Stack.Navigator>

    </NavigationContainer>
  );
}
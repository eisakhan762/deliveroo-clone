import { StatusBar } from 'expo-status-bar';
import './global.css';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'Screens/HomeScreen';
import RestaurantScreen from 'Screens/RestaurantScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={HomeScreen}/>
          <Stack.Screen name='Restaurant' component={RestaurantScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

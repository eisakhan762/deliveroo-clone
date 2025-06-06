import { StatusBar } from 'expo-status-bar';
import './global.css';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'Screens/HomeScreen';
import RestaurantScreen from 'Screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from 'store';
import BasketScreen from 'Screens/BasketScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name='Basket' component={BasketScreen} options={{ presentation: 'modal', headerShown: false, gestureEnabled: true, }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

import { StatusBar } from 'expo-status-bar';
import './global.css';
import { Text } from 'react-native';

export default function App() {
  return (
    <>
      <Text className="text-red-700 bg-red-50 text-9xl">Project Init.</Text>
      <StatusBar style="auto" />
    </>
  );
}

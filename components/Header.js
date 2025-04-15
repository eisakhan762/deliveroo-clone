import { StyleSheet, Text, View, Image } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import hkKit from '../assets/app-icon.png';


const Header = () => {
  return (
    <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image
          source={hkKit}
          className="p-4 bg-gray-300 rounded-full w-14 h-14"
        />
        <View className='flex-1 ml-2'>
          <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
          <Text className="text-xl font-bold">
            Current Location!
            <Entypo name="chevron-down" size={24} color="#00CCBB" />
          </Text>
        </View>

        <AntDesign name="user" size={35} color="#00CCBB" />
      </View>
  )
}

export default Header

const styles = StyleSheet.create({})
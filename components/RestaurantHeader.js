import { Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'

const RestaurantHeader = ({title, short_description, imgUrl, rating, genre, address}) => {
  return (
    <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row my-1 space-x-2">
            <View className='flex-row items-center space-x-1'>
              <AntDesign name="star" size={22} color="green" className="opacity-50" />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-600">{rating}</Text> • {genre}
              </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
            <Entypo name="location-pin" size={24} color="gray" className='opacity-40' />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-600">Nearby</Text> • {address}
              </Text>
            </View>
          </View>
          <Text className='pb-4 mt-2 text-gray-500'>{short_description}</Text>
        </View>

        <TouchableOpacity className='flex-row items-center justify-between px-4 py-3 bg-white border-gray-300 border-y'>
        <AntDesign name="questioncircleo" size={24} color="gray" className='opacity-60' />
        <Text className='flex-1 pl-2 font-bold text-md'>Have a Food Allergy?</Text>
        <Entypo name="chevron-right" size={24} color="#00CCBB" />
        </TouchableOpacity>
      </View>
  )
}

export default RestaurantHeader
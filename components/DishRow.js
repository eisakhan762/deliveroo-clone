import { View, Text, TouchableOpacity, Image } from 'react-native';
import { urlFor } from 'sanity';
import { AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { is } from './../node_modules/@types/node/crypto.d';
import { useState } from 'react';

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View className="mx-4 mb-4 overflow-hidden bg-white shadow-sm rounded-xl">
      <View className="flex-row">
        {/* Left Side - Dish Info */}
        <View className="flex-1 p-4">
          <View>
            <Text className="text-lg font-semibold text-gray-800">{name}</Text>
            <Text className="mt-1 text-sm text-gray-500">{description}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="mt-3 text-base font-bold text-green-600">₹ {price}</Text>
            <Text className="mt-3 text-base text-gray-500"> X 4</Text>
          </View>
        </View>

        {/* Right Side - Image + Button */}
        <View className="relative p-4">
          <Image source={{ uri: urlFor(image).url() }} className="bg-gray-100 h-28 w-28" />

          {/* Add Button in corner */}
          <TouchableOpacity
            className="absolute bottom-1 right-1 rounded-full bg-[#00CCBB] p-2 shadow"
            onPress={() => setIsPressed(!isPressed)}>
              {isPressed ? (
                <MaterialIcons name="remove-shopping-cart" size={18} color="white" />
              ) : (
                <MaterialIcons name="shopping-cart" size={18} color="white" />
              )}
          </TouchableOpacity>
        </View>
      </View>

      {isPressed && (
        <View className='px-4 bg-white'>
          <View className='flex-row items-center gap-3 py-2'>
            <TouchableOpacity>
              <Entypo name="circle-with-minus" size={40} color="#00CCBB" />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <Entypo name="circle-with-plus" size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default DishRow;

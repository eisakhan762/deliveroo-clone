import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from 'features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from 'features/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { urlFor } from 'sanity';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      if (!results[item.id]) {
        results[item.id] = [];
      }
      results[item.id].push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="shadow-xs border-b border-[#00CCBB] bg-white p-5">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute bg-gray-100 rounded-full right-5 top-3">
            <MaterialCommunityIcons name="close-circle" size={50} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center px-4 py-3 my-5 space-x-4 bg-white'>
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className="p-4 bg-gray-300 rounded-full w-14 h-14"
          />
          <Text className='flex-1 ml-2'>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB] font-bold">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} className='flex-row items-center gap-3 px-5 py-2 bg-white'>
              <Text className='text-[#00CCBB]'>{items.length} x</Text>
              <Image 
                source={{uri: urlFor(items[0]?.image).url()}}
                className='w-12 h-12 rounded-full'
              />
              <Text className='flex-1'>{items[0]?.name}</Text>
              <Text className='text-gray-600'>
                {/* ₹{items[0]?.price} x {items.length} = ₹{items[0]?.price * items.length} */}
                ₹{items[0]?.price}
              </Text>
              <TouchableOpacity className=''>
                <Text className='text-[#00CCBB] text-xs' onPress={() => dispatch(removeFromBasket({id: key}))}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className='p-5 mt-5 bg-white gap-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>₹ {basketTotal}</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>₹ 48</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text>Order Total</Text>
            <Text className='font-extrabold'>₹ {48+basketTotal}</Text>
          </View>

          <TouchableOpacity className='rounded-lg bg-[#00CCBB] p-4'>
            <Text className='text-lg font-bold text-center text-white'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from 'sanity';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import RestaurantHeader from 'components/RestaurantHeader';
import DishRow from 'components/DishRow';
import BasketIcon from 'components/BasketIcon';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: { id, title, short_description, imgUrl, lat, long, rating, genre, address, dishes },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full p-4 bg-gray-300 h-60"
          />
          <TouchableOpacity
            className="absolute p-2 bg-gray-100 rounded-full left-5 top-10"
            onPress={navigation.goBack}>
            <AntDesign name="arrowleft" size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <RestaurantHeader
          title={title}
          short_description={short_description}
          rating={rating}
          genre={genre || 'General'}
          address={address}
        />

        <View className='pb-20'>
          <Text className="px-4 pt-6 mb-3 text-xl font-bold">Menu</Text>

          {/* Dish rows */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});

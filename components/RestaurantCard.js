import React, { useState, useRef } from 'react';
import {
  Animated,
  Image,
  Text,
  Pressable,
  View,
} from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const RestaurantCard = ({
  id,
  title,
  short_description,
  imgUrl,
  lat,
  long,
  rating,
  genre,
  address,
  dishes,
  isOpenNow = false,
  deliveryFee = 0,
  minDeliveryTime = 0,
  maxDeliveryTime = 0,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className="mr-4 overflow-hidden bg-white shadow-md rounded-xl"
      >
        {/* Image & Heart */}
        <View className="relative">
          <Image source={{ uri: imgUrl }} className="w-64 h-36" />
          <Pressable
            onPress={() => setIsFavorite(prev => !prev)}
            className="absolute p-1 rounded-full right-2 top-2 bg-white/80"
          >
            <AntDesign
              name={isFavorite ? 'heart' : 'hearto'}
              size={18}
              color={isFavorite ? 'red' : 'gray'}
            />
          </Pressable>
        </View>

        {/* Main Content */}
        <View className="p-4 space-y-2">
          <Text className="text-lg font-semibold text-gray-900">{title}</Text>

          {/* Rating & Genre */}
          <View className="flex-row items-center">
            <Foundation name="star" size={16} color="green" />
            <Text className="ml-1 text-sm text-gray-700">
              <Text className="text-green-600">{rating}</Text> • {genre}
            </Text>
          </View>

          {/* Short Description */}
          {short_description ? (
            <Text className="text-xs text-gray-500" numberOfLines={2} ellipsizeMode="tail">
              {short_description}
            </Text>
          ) : null}

          {/* Open & Delivery */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <MaterialIcons
                name={isOpenNow ? 'access-time' : 'highlight-off'}
                size={16}
                color={isOpenNow ? 'green' : 'red'}
              />
              <Text className={`ml-1 text-xs ${isOpenNow ? 'text-green-600' : 'text-red-500'}`}>
                {isOpenNow ? 'Open Now' : 'Closed'}
              </Text>
            </View>

            <Text className="text-xs text-gray-600">
              {deliveryFee === 0 ? 'Free Delivery' : `₹${deliveryFee}`} • {minDeliveryTime}-{maxDeliveryTime} mins
            </Text>
          </View>
        </View>

        {/* Address */}
        <View className="flex-row items-center px-4 pb-4">
          <Entypo name="location-pin" size={18} color="gray" />
          <Text
            className="flex-1 ml-1 text-xs text-gray-500"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Nearby • {address}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default RestaurantCard;

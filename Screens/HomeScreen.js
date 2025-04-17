import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from 'components/Header';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Categories from 'components/Categories';
import FeaturedRow from 'components/FeaturedRow';
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="pt-5 bg-white">
      {/* header */}
      <Header />

      {/* search */}
      <View className="flex-row items-center pb-2 mx-4 mt-1 space-x-2">
        <View className="flex-row items-center flex-1 p-2 space-x-2 bg-gray-200">
          <FontAwesome5 name="searchengin" size={25} color="gray" />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
        </View>
        <FontAwesome6 name="sliders" size={25} color="#00CCBB" className="ml-2" />
      </View>

      {/* body */}
      <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
        id={"123"}
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Tasty Discount */}
        <FeaturedRow
          id={"1234"}
          title="Tasty Discounts"
          description="Paid placements from our partners"
        />

        {/* Offers Near You */}
        <FeaturedRow
          id={"12345"}
          title="Offers Near You"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

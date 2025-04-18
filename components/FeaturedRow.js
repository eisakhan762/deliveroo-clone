import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import client from 'sanity';

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->
          }
        }[0]
      `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);
  console.log(JSON.stringify(restaurants, null, 2));
  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="text-2xl font-bold">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text className="px-4 text-gray-500 text-s">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        {/* RestaurantCards.... */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            short_description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
        

        {/* <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
          isOpenNow={true}
          deliveryFee={'₹2.5'}
          minDeliveryTime={20}
          maxDeliveryTime={40}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});

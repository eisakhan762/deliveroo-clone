import { ScrollView, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({id, title, description, featuredCategory}) => {
  return (
    <View>
      <View className='flex-row items-center justify-between px-4 mt-4'>
        <Text className='text-2xl font-bold'>{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text className='px-4 text-gray-500 text-s'>{description}</Text>
      
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* RestaurantCards.... */}
        <RestaurantCard 
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
          deliveryFee={"₹2.5"}
          minDeliveryTime={20}
          maxDeliveryTime={40}
         />
         
        <RestaurantCard 
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
          deliveryFee={"₹2.5"}
          minDeliveryTime={20}
          maxDeliveryTime={40}
         />

<RestaurantCard 
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
          deliveryFee={"₹2.5"}
          minDeliveryTime={20}
          maxDeliveryTime={40}
         />
      </ScrollView>
      
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})
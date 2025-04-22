import { useNavigation } from '@react-navigation/native';
import { selectBasketItems, selectBasketTotal } from 'features/basketSlice';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  return (
    <View className="absolute left-0 right-0 z-50 px-5 bottom-5">
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className="flex-row items-center justify-between px-5 py-4 rounded-full"
        style={{
          backgroundColor: '#00CCBB',
          elevation: 12,
          shadowColor: '#00AA99',
          shadowOpacity: 0.4,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 10,
        }}
      >
        {/* Left: Icon + Count */}
        <View className="flex-row items-center space-x-2">
          <MaterialCommunityIcons name="cart" size={22} color="white" />
          <Text className="font-extrabold text-white ">{items.length} items</Text>
        </View>

        {/* Center: CTA */}
        <Text className="font-extrabold text-white">View Basket</Text>
          
        {/* Right: Price */}
        <Text className="text-base font-bold text-white">₹{basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { urlFor } from 'sanity';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from 'features/basketSlice';
import PowerCartButton from './PowerCartButton';
import * as Animatable from 'react-native-animatable';
import StepperButton from './StepperButton';

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({id}))
  }
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
            <Text className="mt-3 text-base text-gray-500"> X {items.length} = ₹{items.length*price}</Text>
          </View>
        </View>

        {/* Right Side - Image + Button */}
        <View className="relative p-4">
          <Image source={{ uri: urlFor(image).url() }} className="bg-gray-100 h-28 w-28" />

          {/* Add Button in corner */}
          <PowerCartButton setIsPressed={setIsPressed} isPressed={isPressed} />
        </View>
      </View>
      {isPressed && (
        <Animatable.View
          animation="slideInUp"
          duration={500}
          easing="ease-out"
          className="bg-white">
          <View
            className="flex-row items-center gap-3 px-3 pt-0 pb-3 rounded-2xl">
            {/* Minus */}
            <StepperButton type="minus" onPress={removeItemFromBasket} length={items.length}/>

            {/* Counter */}
            <Animatable.Text
              animation="pulse"
              iterationCount="infinite"
              duration={800}
              className="text-2xl font-extrabold text-white"
              style={{
                textShadowColor: '#00ccbb',
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 6,
              }}>
              {items?.length}
            </Animatable.Text>

            {/* Plus */}
            <StepperButton type="plus" onPress={addItemToBasket} />
          </View>
        </Animatable.View>
      )}
    </View>
  );
};

export default DishRow;
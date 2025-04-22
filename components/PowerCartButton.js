import { TouchableOpacity, Animated, Easing, View } from 'react-native';
import { useState, useRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const PowerCartButton = ({isPressed, setIsPressed}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const togglePress = () => {
    setIsPressed(!isPressed);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.3,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.timing(rotateAnim, {
      toValue: isPressed ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleAnim }, { rotate: spin }],
        position: 'absolute',
        bottom: 8,
        right: 8,
        shadowColor: '#00CCBB',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
        backgroundColor: isPressed ? '#FF6B6B' : '#00CCBB',
        borderRadius: 999,
        padding: 12,
      }}>
      <TouchableOpacity onPress={togglePress}>
        <MaterialIcons
          name={isPressed ? 'remove-shopping-cart' : 'add-shopping-cart'}
          size={20}
          color="white"
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PowerCartButton;

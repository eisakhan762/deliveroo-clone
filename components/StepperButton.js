import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Entypo } from '@expo/vector-icons';

const StepperButton = ({ type = 'plus', onPress, length = 1 }) => {
  const iconName = type === 'plus' ? 'plus' : 'minus';
  const isDisabled = type === 'minus' && length <= 0;

  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled}>
      <Animatable.View
        animation="zoomIn"
        delay={100}
        className="p-2 rounded-full"
        style={{
          backgroundColor: isDisabled ? '#ccc' : '#00ccbb33',
          shadowColor: isDisabled ? '#ccc' : '#00ccbb',
          shadowRadius: 10,
          shadowOpacity: isDisabled ? 0.3 : 0.6,
        }}
      >
        <Entypo name={iconName} size={28} color={isDisabled ? '#999' : '#00CCBB'} />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default StepperButton;

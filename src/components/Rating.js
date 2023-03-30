import { HStack, Text } from 'native-base';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../color';

const Rating = ({ value, text }) => {
  return (
    <HStack space={0.4} mt={1} alignItems="center">
      <MaterialIcons
        name={value >= 1 ? 'star' : value >= 0.5 ? 'star-half' : 'star-outline'}
        size={12}
        color={Colors.orange}
      />
      <MaterialIcons
        name={value >= 2 ? 'star' : value >= 1.5 ? 'star-half' : 'star-outline'}
        size={12}
        color={Colors.orange}
      />
      <MaterialIcons
        name={value >= 3 ? 'star' : value >= 2.5 ? 'star-half' : 'star-outline'}
        size={12}
        color={Colors.orange}
      />
      <MaterialIcons
        name={value >= 4 ? 'star' : value >= 3.5 ? 'star-half' : 'star-outline'}
        size={12}
        color={Colors.orange}
      />
      <MaterialIcons
        name={value >= 5 ? 'star' : value >= 4.5 ? 'star-half' : 'star-outline'}
        size={12}
        color={Colors.orange}
      />
      {text && (
        <Text fontSize={12} color={Colors.lightBlack} ml={2}>
          {text}
        </Text>
      )}
    </HStack>
  );
};

export default Rating;

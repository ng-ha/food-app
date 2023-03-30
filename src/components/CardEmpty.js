import React from 'react';
import { Box, Center, Text } from 'native-base';
import Colors from '../color';
import { MaterialIcons } from '@expo/vector-icons';
import MyButton from './MyButton';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

const CardEmpty = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} px={5}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <MaterialIcons name="shopping-basket" size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      {Platform.OS !== 'android' && (
        <MyButton bg={Colors.main} color={Colors.white} onPress={() => navigation.navigate('home')}>
          START SHOPPING
        </MyButton>
      )}
    </Box>
  );
};

export default CardEmpty;

import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Box, HStack, Input, Pressable } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import Colors from '../color';
import { selectTotalCount } from '../store/basketStore';
const HomeSearch = () => {
  const navigation = useNavigation();
  const totalCount = useSelector(selectTotalCount);

  return (
    <HStack space={3} w="full" px={6} bg={Colors.main} py={4} alignItems="center" safeAreaTop>
      <Input
        placeholder="Search"
        w="85%"
        bg={Colors.white}
        h="12"
        borderWidth={0}
        _focus={{ bg: Colors.white }}
        variant="filled"
      />
      <Pressable ml={3} onPress={() => navigation.navigate('cart')}>
        <MaterialIcons name="shopping-cart" size={34} color={Colors.white} />
        {totalCount > 0 && (
          <Box
            px={1}
            rounded="full"
            position="absolute"
            top={-10}
            right={0}
            bg={Colors.red}
            _text={{
              color: Colors.white,
              fontSize: 12,
            }}
          >
            {totalCount}
          </Box>
        )}
      </Pressable>
    </HStack>
  );
};

export default HomeSearch;

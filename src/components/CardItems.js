import { Box, Button, Center, FlatList, HStack, Image, Pressable, Text, VStack } from 'native-base';
import React from 'react';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '../color';

import { Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, selectAllItems } from '../store/basketStore';
import PriceFormat from '../utils/PriceFormat';

const renderRightActions = (progress, dragX) => {
  const trans = dragX.interpolate({
    inputRange: [-64, 0],
    outputRange: [0, 20],
    extrapolate: 'clamp',
  });
  return (
    <Pressable
      w="16"
      roundedTopRight={10}
      roundedBottomRight={10}
      rounded={10}
      h="86%"
      justifyContent="center"
      bg={Colors.red}
    >
      <Center alignItems="center" space={2}>
        <Animated.View
          style={{
            transform: [{ translateX: trans }],
          }}
        >
          <MaterialIcons name="delete" size={24} color={Colors.white} />
        </Animated.View>
      </Center>
    </Pressable>
  );
};

const SwipeableRow = ({ item }) => {
  const { product, quantity } = item;
  const dispatch = useDispatch();
  const onSwipeableOpen = (direction) => {
    dispatch(removeItem(product._id));
  };
  return (
    <Swipeable
      friction={2}
      enableTrackpadTwoFingerGesture
      rightThreshold={32}
      renderRightActions={renderRightActions}
      onSwipeableOpen={onSwipeableOpen}
    >
      <Pressable>
        <Box ml={6} mb={4}>
          <HStack alignItems="center" bg={Colors.white} shadow="4" rounded={10} overflow="hidden">
            <Center w="25%" bg={Colors.mainThin}>
              <Image
                source={product.image}
                alt={product._id}
                w="full"
                h={24}
                resizeMode="contain"
              />
            </Center>
            <VStack w="60%" px={2} space={2}>
              <Text isTruncated color={Colors.black} bold fontSize={13}>
                {product.name}
              </Text>
              <PriceFormat value={product.price} bold color={Colors.lightBlack} />
            </VStack>
            <Center>
              <Button
                bg={Colors.main}
                _pressed={{ bg: Colors.main, opacity: 0.7 }}
                _text={{ color: Colors.white, fontWeight: 'bold' }}
              >
                {quantity}
              </Button>
            </Center>
          </HStack>
        </Box>
      </Pressable>
    </Swipeable>
  );
};

const SwipeableList = () => {
  const items = useSelector(selectAllItems);
  return (
    <GestureHandlerRootView>
      <FlatList
        data={items}
        renderItem={({ item }) => <SwipeableRow item={item} />}
        keyExtractor={(item) => item.product._id}
      />
    </GestureHandlerRootView>
  );
};

const CardItems = () => {
  return (
    <Box mr={6}>
      <SwipeableList />
    </Box>
  );
};

export default CardItems;

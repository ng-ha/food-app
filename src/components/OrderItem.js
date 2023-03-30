import { Box, Center, FlatList, HStack, Image, Pressable, VStack, Text, Button } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import Colors from '../color';
import { selectAllItems } from '../store/basketStore';
import PriceFormat from '../utils/PriceFormat';

const OrderItem = () => {
  const items = useSelector(selectAllItems);
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={items}
      keyExtractor={(item) => item.product._id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={4}>
            <HStack alignItems="center" bg={Colors.white} shadow={1} rounded={10} overflow="hidden">
              <Center w="25%" bg={Colors.mainThin}>
                <Image
                  source={item.product.image}
                  alt={item.product._id}
                  w="full"
                  h={24}
                  resizeMode="contain"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated color={Colors.black} bold fontSize={14} mb={2}>
                  {item.product.name}
                </Text>
                <PriceFormat value={item.product.price} color={Colors.lightBlack} bold />
              </VStack>
              <Center>
                <Button
                  bg={Colors.main}
                  _pressed={{ bg: Colors.main, opacity: 0.7 }}
                  _text={{ color: Colors.white, fontWeight: 'bold' }}
                >
                  {item.quantity}
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
};

export default OrderItem;

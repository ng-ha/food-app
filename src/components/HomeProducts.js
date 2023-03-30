import React from 'react';
import { Flex, Pressable, ScrollView, Image, Text, Box, Heading } from 'native-base';
import products from '../data/products';
import Colors from '../color';
import Rating from './Rating';
import { useNavigation } from '@react-navigation/native';
import PriceFormat from '../utils/PriceFormat';
const HomeProducts = () => {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex flexWrap="wrap" direction="row" justifyContent="space-between" px={6}>
        {products.map((product) => (
          <Pressable
            key={product._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
            onPress={() => navigation.navigate('single-product', product)}
            _pressed={{ opacity: 0.8 }}
          >
            <Image source={product.image} alt={product.name} w="full" h={24} resizeMode="contain" />
            <Box px={4} pt={1}>
              <Heading size="xs" bold isTruncated numberOfLines={1}>
                {product.name}
              </Heading>
              <Text fontSize={12} mt={1} isTruncated w="full" color={Colors.lightBlack}>
                <PriceFormat value={product.price} />
              </Text>
              <Rating
                value={
                  product.reviews.length > 0
                    ? product.reviews.reduce((total, cur) => (total += Number(cur.rating)), 0) /
                      product.reviews.length
                    : 0
                }
              />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;

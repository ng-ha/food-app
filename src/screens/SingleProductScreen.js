import { Box, Heading, HStack, Image, Spacer, Stack, StatusBar, Text, VStack } from 'native-base';
import React, { useRef, useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import { useDispatch } from 'react-redux';
import Colors from '../color';
import MyButton from '../components/MyButton';
import Rating from '../components/Rating';
import ReviewSection from '../components/product/ReviewSection';
import { addItem } from '../store/basketStore';
import PriceFormat from '../utils/PriceFormat';
import ScrollView from '../utils/ScrollView';

const SingleProductScreen = ({ navigation, route }) => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState(false);
  const product = route.params;
  const dispatch = useDispatch();

  const addToCart = () => {
    if (value) {
      if (error) setError(false);
      dispatch(addItem({ product, quantity: value }));
      navigation.navigate('cart');
    } else {
      setError(true);
    }
  };

  return (
    <Box safeAreaTop flex={1} bg={Colors.white}>
      <StatusBar barStyle="dark-content" animated backgroundColor={Colors.white} />
      <ScrollView
        ListHeaderComponentStyle={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Image source={product.image} alt="product" w="full" h={300} resizeMode="contain" />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating
          value={
            product.reviews.length > 0
              ? product.reviews.reduce((total, cur) => (total += Number(cur.rating)), 0) /
                product.reviews.length
              : 0
          }
          text={product.reviews.length + ' reviews'}
        />

        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <VStack>
              <NumericInput
                value={value}
                onChange={setValue}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                rounded
                borderColor={Colors.deepGray}
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              />
              <Text
                style={{ position: 'absolute', left: 30, bottom: -20 }}
                mt={2}
                italic
                fontSize="xs"
                color={Colors.lightBlack}
              >
                Stock count: {product.countInStock}
              </Text>
            </VStack>
          ) : (
            <Heading bold color={Colors.red} italic fontSize={12}>
              Out of order
            </Heading>
          )}

          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            <PriceFormat value={product.price} />
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={14} textAlign="justify" mt={2}>
          {product.description}
        </Text>
        <Box>
          <MyButton fontSize="md" bg={Colors.main} color={Colors.white} mt={10} onPress={addToCart}>
            Add to cart
          </MyButton>
          {error && (
            <Text
              textAlign="center"
              italic
              fontSize={12}
              color={Colors.red}
              style={{
                position: 'absolute',
                bottom: -20,
                left: 90,
              }}
            >
              Please select the number of items first!
            </Text>
          )}
        </Box>
        <ReviewSection product={product} />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;

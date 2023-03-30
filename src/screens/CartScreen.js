import { Box, Button, Center, HStack, Spacer, StatusBar, Text } from 'native-base';
import React from 'react';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../color';
import CardEmpty from '../components/CardEmpty';
import CardItems from '../components/CardItems';
import MyButton from '../components/MyButton';
import { selectAllItems, selectTotalPrice } from '../store/basketStore';
import PriceFormat from '../utils/PriceFormat';
import ScrollView from '../utils/ScrollView';

const CartScreen = ({ navigation }) => {
  const items = useSelector(selectAllItems);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <Box flex={1} safeArea bg={Colors.mainLight}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.mainLight} />

      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>

      {items.length === 0 && <CardEmpty />}

      {items.length > 0 && (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CardItems />
          </ScrollView>

          <Box mb={2}>
            <Center pt={6}>
              <HStack
                rounded={50}
                justifyContent="space-between"
                alignItems="center"
                bg={Colors.white}
                shadow={2}
                w="90%"
                pl={5}
                h={45}
              >
                <Text fontSize={16} bold color={Colors.black}>
                  Total
                </Text>
                <Button
                  px={10}
                  h={45}
                  rounded={50}
                  bg={Colors.main}
                  _pressed={{ bg: Colors.main, opacity: 0.7 }}
                >
                  <PriceFormat value={totalPrice} color={Colors.white} bold />
                </Button>
              </HStack>
            </Center>
            {/* Checkout */}
            <Center px={5} mb={Platform.OS === 'android' ? 9 : 0}>
              <MyButton
                bg={Colors.main}
                color={Colors.white}
                mt={5}
                onPress={() => navigation.navigate('shipping')}
              >
                Checkout
              </MyButton>
            </Center>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartScreen;

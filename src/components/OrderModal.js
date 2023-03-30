import { useNavigation } from '@react-navigation/native';
import { Button, Center, HStack, Image, Modal, Pressable, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Colors from '../color';
import { selectTotalPrice } from '../store/basketStore';
import PriceFormat from '../utils/PriceFormat';
import MyButton from './MyButton';

const ordersInfo = [
  {
    title: 'Products',
    color: 'black',
  },
  {
    title: 'Shipping',
    color: 'black',
  },
  {
    title: 'Tax',
    color: 'black',
  },
  {
    title: 'Total Amount',
    color: 'main',
  },
];

const OrderModal = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <Center>
      <MyButton onPress={() => setShowModel(true)} bg={Colors.main} color={Colors.white} mt={5}>
        Show payment & total
      </MyButton>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxW={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {ordersInfo.map((x) => (
                <HStack key={x.title} alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">{x.title}</Text>
                  <Text color={Colors[x.color]} bold>
                    <PriceFormat
                      value={
                        x.title === 'Products'
                          ? totalPrice
                          : x.title === 'Shipping'
                          ? 6.99
                          : x.title === 'Tax'
                          ? 2.99
                          : totalPrice + 6.99 + 2.99
                      }
                    />
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={5}
              overflow="hidden"
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require('../../assets/images/PayPal.png')}
                alt="paypal"
                resizeMode="contain"
                w="full"
                style={{ height: 56 }}
              />
            </Pressable>
            <Button
              w="full"
              mt={4}
              bg={Colors.black}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                setShowModel(false);
                navigation.navigate('home');
              }}
              _pressed={{ bg: Colors.black, opacity: 0.7 }}
            >
              Pay later
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModal;

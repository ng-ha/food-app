import { useNavigation } from '@react-navigation/native';
import { Button, Center, HStack, Modal, Text, VStack } from 'native-base';
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

const PlaceOrderModal = () => {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <Center>
      <MyButton
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
        mb={Platform.OS === 'android' ? 9 : 0}
      >
        Show total
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
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                setShowModel(false);
                navigation.navigate('order');
              }}
              _pressed={{ bg: Colors.main, opacity: 0.7 }}
            >
              Place an order
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModal;

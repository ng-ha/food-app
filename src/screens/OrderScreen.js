import { Box, Heading, ScrollView, StatusBar } from 'native-base';
import React from 'react';
import Colors from '../color';
import OrderInfo from '../components/OrderInfo';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import OrderItem from '../components/OrderItem';
import OrderModal from '../components/OrderModal';
import { useSelector } from 'react-redux';
import {
  selectAddress,
  selectEmail,
  selectPaymentMethod,
  selectPostalCode,
  selectUsername,
} from '../store/userStore';

const OrderScreen = () => {
  const email = useSelector(selectEmail);
  const username = useSelector(selectUsername);
  const paymentMethod = useSelector(selectPaymentMethod);
  const postalCode = useSelector(selectPostalCode);
  const address = useSelector(selectAddress);

  return (
    <Box bg={Colors.mainLight} flex={1} safeArea pt={6}>
      <StatusBar barStyle="dark-content" animated />

      <Box>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="Customer"
            subTitle={username || 'Nguyen Thanh Ha'}
            text={email || 'admin@gmail.com'}
            icon={<Ionicons name="person-sharp" size={30} color={Colors.white} />}
          />
          <OrderInfo
            success
            title="Shipping Info"
            subTitle={`Postal Code: ${postalCode || 159230}`}
            text={`Payment Method: ${paymentMethod}`}
            icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />}
          />
          <OrderInfo
            danger
            title="Deliver to"
            subTitle="Address: "
            text={address || 'Kolskaya st. Moscow, Russia'}
            icon={<Ionicons name="location-sharp" size={30} color={Colors.white} />}
            mr={5}
          />
        </ScrollView>
      </Box>
      {/* Order Items */}
      <Box px={6} flex={1} pb={3}>
        <Heading fontSize={16} textAlign="center" isTruncated my={4}>
          LIST OF PRODUCTS
        </Heading>
        <OrderItem />
        <OrderModal />
      </Box>
    </Box>
  );
};

export default OrderScreen;

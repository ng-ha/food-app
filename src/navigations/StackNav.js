import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SingleProductScreen from '../screens/SingleProductScreen';
import ShippingScreen from '../screens/ShippingScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PlaceOrderScreen from '../screens/PlaceOrderScreen';

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="single-product" component={SingleProductScreen} />
      <Stack.Screen name="shipping" component={ShippingScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
      <Stack.Screen name="place-order" component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;

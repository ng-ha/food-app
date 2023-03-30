import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  StatusBar,
  Text,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import Colors from '../color';
import MyButton from '../components/MyButton';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { setPaymentMethod } from '../store/userStore';

const PaymentScreen = ({ navigation }) => {
  const [paymentMethod, setPaymentMethodState] = useState('PayPal');
  const dispatch = useDispatch();
  const onContinue = () => {
    dispatch(setPaymentMethod(paymentMethod));
    navigation.navigate('place-order');
  };
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <StatusBar barStyle="light-content" animated />
      {/* header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          Payment method
        </Text>
      </Center>
      {/* input */}
      <Box h="full" bg={Colors.mainThin} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            <TouchableOpacity onPress={() => setPaymentMethodState('PayPal')}>
              <HStack
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={2.5}
                rounded={10}
                justifyContent="space-between"
              >
                <Image
                  source={require('../../assets/images/PayPal.png')}
                  resizeMode="contain"
                  style={{ width: 150, height: 70, marginLeft: -14, marginVertical: -10 }}
                  alt="paypal"
                />
                <FontAwesome
                  name={paymentMethod === 'PayPal' ? 'check-circle' : 'circle-o'}
                  size={30}
                  color={Colors.main}
                />
              </HStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPaymentMethodState('Amazon Pay')}>
              <HStack
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                rounded={10}
                justifyContent="space-between"
              >
                <Image
                  source={require('../../assets/images/1280px-Amazon_Pay_logo.svg.png')}
                  resizeMode="contain"
                  style={{ width: 140, height: 50, marginTop: 8 }}
                  alt="amazon"
                  bg={Colors.white}
                />
                <FontAwesome
                  name={paymentMethod === 'Amazon Pay' ? 'check-circle' : 'circle-o'}
                  size={30}
                  color={Colors.main}
                />
              </HStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPaymentMethodState('Google Pay')}>
              <HStack
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={3}
                rounded={10}
                justifyContent="space-between"
              >
                <Image
                  source={require('../../assets/images/googlepay.png')}
                  resizeMode="contain"
                  w={20}
                  h={10}
                  alt="google pay"
                />

                <FontAwesome
                  name={paymentMethod === 'Google Pay' ? 'check-circle' : 'circle-o'}
                  size={30}
                  color={Colors.main}
                  s
                />
              </HStack>
            </TouchableOpacity>

            <MyButton bg={Colors.main} color={Colors.white} mt={5} onPress={onContinue}>
              Continue
            </MyButton>
            <Text italic textAlign="center">
              Payment method is <Text bold>PayPal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;

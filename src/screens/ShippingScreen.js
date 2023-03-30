import { Box, Center, FormControl, Input, ScrollView, StatusBar, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Colors from '../color';
import MyButton from '../components/MyButton';
import { setAddress, setPostalCode } from '../store/userStore';

const shippingInputs = [
  {
    label: 'Enter city',
    type: 'text,',
  },
  {
    label: 'Enter country',
    type: 'text,',
  },
  {
    label: 'Enter postal code',
    type: 'text,',
  },
  {
    label: 'Enter address',
    type: 'text,',
  },
];

const ShippingScreen = ({ navigation }) => {
  const [address, setAddressState] = useState(null);
  const [postalCode, setPostalCodeState] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const dispatch = useDispatch();
  const onContinue = () => {
    dispatch(setPostalCode(postalCode));
    dispatch(setAddress(address));
    navigation.navigate('payment');
  };
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <StatusBar barStyle="light-content" animated />

      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          Delivery address
        </Text>
      </Center>

      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {shippingInputs.map((input) => (
              <FormControl key={input.label}>
                <FormControl.Label _text={{ fontSize: 12, fontWeight: 'bold' }}>
                  {input.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  value={
                    input.label === 'Enter address'
                      ? address
                      : input.label === 'Enter postal code'
                      ? postalCode
                      : input.label === 'Enter city'
                      ? city
                      : country
                  }
                  onChangeText={
                    input.label === 'Enter address'
                      ? setAddressState
                      : input.label === 'Enter postal code'
                      ? setPostalCodeState
                      : input.label === 'Enter city'
                      ? setCity
                      : setCountry
                  }
                  borderColor={Colors.main}
                  bg={Colors.mainLight}
                  py={4}
                  color={Colors.main}
                  type={input.type}
                  _focus={{
                    bg: Colors.mainThin,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <MyButton bg={Colors.main} color={Colors.white} mt={5} onPress={onContinue}>
              Continue
            </MyButton>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShippingScreen;

import { View } from 'react-native';
import React, { useState } from 'react';
import { Box, Button, Heading, Image, Input, Pressable, Text, VStack } from 'native-base';
import Colors from '../color';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { setEmail, setUsername } from '../store/userStore';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmailState] = useState(null);
  const [username, setUsernameState] = useState(null);
  const dispatch = useDispatch();
  const onRegister = () => {
    dispatch(setEmail(email));
    dispatch(setUsername(username));
    navigation.navigate('bottom');
  };
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="logo"
        source={require('../../assets/images/cover.webp')}
        resizeMode="cover"
        w="full"
      />
      <Box w="full" h="full" position="absolute" top="0" px="6" justifyContent="center">
        <Heading color={Colors.white}>SIGN UP</Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons
                name="person"
                size={20}
                color={Colors.white}
                style={{ paddingRight: 8 }}
              />
            }
            value={username}
            onChangeText={setUsernameState}
            variant="underlined"
            placeholder="Your username"
            w="58%"
            color={Colors.white}
            borderBottomColor={Colors.underline}
            size="lg"
            selectionColor="#fff"
          />
          <Input
            InputLeftElement={
              <MaterialIcons
                name="email"
                size={20}
                color={Colors.white}
                style={{ paddingRight: 8 }}
              />
            }
            value={email}
            onChangeText={setEmailState}
            variant="underlined"
            placeholder="Your email"
            w="58%"
            color={Colors.white}
            borderBottomColor={Colors.underline}
            size="lg"
            selectionColor="#fff"
          />
          <Input
            InputLeftElement={
              <MaterialIcons
                name="remove-red-eye"
                size={20}
                color={Colors.white}
                style={{ paddingRight: 8 }}
              />
            }
            variant="underlined"
            placeholder="Your password"
            w="58%"
            color={Colors.white}
            borderBottomColor={Colors.underline}
            size="lg"
            type="password"
            selectionColor="#f700be"
          />
        </VStack>
        <Button
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.white}
          _pressed={{
            bg: Colors.gray,
          }}
          _text={{ color: Colors.main }}
          onPress={onRegister}
        >
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate('login')}>
          <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default RegisterScreen;

import { useNavigation } from '@react-navigation/native';
import { Box, Center, FormControl, Input, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import Colors from '../../color';
import { selectEmail, selectUsername } from '../../store/userStore';
import MyButton from '../MyButton';

const Inputs = [
  { label: 'Username', type: 'text' },
  { label: 'Email', type: 'text' },
  { label: 'New password', type: 'password' },
  { label: 'Confirm password', type: 'password' },
];

const Profile = () => {
  const email = useSelector(selectEmail);
  const username = useSelector(selectUsername);
  const navigation = useNavigation();
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((input) => (
            <FormControl key={input.label}>
              <FormControl.Label
                _text={{ fontSize: 14, fontWeight: 'semibold', color: Colors.black }}
              >
                {input.label}
              </FormControl.Label>
              <Input
                bg={Colors.mainLight}
                placeholder={
                  input.label === 'Username'
                    ? username || undefined
                    : input.label === 'Email'
                    ? email || undefined
                    : undefined
                }
                py={4}
                color={Colors.main}
                fontSize={15}
                _focus={{ bg: Colors.mainThin, borderWidth: 1, borderColor: Colors.main }}
                type={input.type}
              />
            </FormControl>
          ))}
          <MyButton bg={Colors.main} color={Colors.white}>
            Update profile
          </MyButton>

          <Box borderTopWidth={1} borderColor={Colors.lightBlack}>
            <Center>
              <Box padding={2} background={Colors.white} position="absolute">
                <Text bold italic>
                  Or
                </Text>
              </Box>
            </Center>
          </Box>

          <MyButton
            bg={Colors.main}
            color={Colors.white}
            borderTopWidth={1}
            onPress={() => navigation.navigate('login')}
          >
            Log out
          </MyButton>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;

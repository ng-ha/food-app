import { MaterialIcons } from '@expo/vector-icons';
import { Center, Heading, StatusBar, Text } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import Colors from '../color';
import Tabs from '../components/Profile/Tabs';
import { selectUsername } from '../store/userStore';

const ProfileScreen = () => {
  const username = useSelector(selectUsername);

  return (
    <>
      <Center safeAreaTop bg={Colors.main} pb={6}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.main} animated />

        <MaterialIcons name="person-pin" size={96} color={Colors.mainLight} />
        <Heading bld fontSize={15} isTruncated my={2} color={Colors.white}>
          {username || 'Nguyen Thanh Ha'}
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Mar 30 2023
        </Text>
      </Center>
      <Tabs />
    </>
  );
};

export default ProfileScreen;

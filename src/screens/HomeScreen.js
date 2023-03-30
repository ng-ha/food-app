import { View, Text, Platform } from 'react-native';
import React from 'react';
import { Box, StatusBar } from 'native-base';
import Colors from '../color';
import HomeSearch from '../components/HomeSearch';
import HomeProducts from '../components/HomeProducts';

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.mainLight}>
      <StatusBar
        hidden={Platform.OS === 'android' ? true : false}
        barStyle="light-content"
        backgroundColor={Colors.main}
        animated
      />

      <HomeSearch />
      <HomeProducts />
    </Box>
  );
};

export default HomeScreen;

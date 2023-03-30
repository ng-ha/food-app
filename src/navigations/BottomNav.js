import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Center, Pressable, Text } from 'native-base';
import HomeScreen from '../screens/HomeScreen';
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Colors from '../color';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress, ...props }) => {
  return (
    <Pressable
      onPress={onPress}
      h={70}
      w={70}
      rounded="full"
      bg={Colors.main}
      top={-30}
      shadow={5}
      _pressed={{
        bg: Colors.mainLight,
      }}
    >
      {children}
    </Pressable>
  );
};

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      initialRouteName="main"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { elevation: 0, backgroundColor: Colors.white, height: 60 },
      }}
    >
      <Tab.Screen
        name="main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarIcon: ({ focused, color, size }) => (
            <Center>
              {focused ? (
                <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
              ) : (
                <MaterialCommunityIcons name="shopping-outline" size={24} color={Colors.white} />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="user" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

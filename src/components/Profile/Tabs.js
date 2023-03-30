import { useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Profile from './Profile';
import Order from './Order';
import Colors from '../../color';
import { Text, Box } from 'native-base';

const renderScene = SceneMap({
  first: Profile,
  second: Order,
});

const Tabs = () => {
  const { height, width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Profile' },
    { key: 'second', title: 'Order' },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      tabStyle={{ backgroundColor: Colors.mainLight }}
      activeColor="#5f5de5"
      inactiveColor="#777791"
      renderLabel={({ route, focused, color }) => (
        <Box style={{ transform: [{ scale: focused ? 1.15 : 1 }] }}>
          <Text color={color} fontSize={13} bold>
            {route.title}
          </Text>
        </Box>
      )}
    />
  );
  return (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      initialLayout={{ width }}
    />
  );
};

export default Tabs;

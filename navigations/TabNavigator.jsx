import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomePage from '../pages/HomePage';
import PayPage from '../pages/PayPage';
import OrderPage from '../pages/OrderPage';
import GiftPage from '../pages/GiftPage';
import OtherPage from '../pages/OtherPage';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  // 왜넣는지?
  // const TabNavigator = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          if (route.name === 'Home') {
            iconName += 'home-sharp';
          } else if (route.name === 'Pay') {
            iconName += 'card';
          } else if (route.name === 'Order') {
            iconName += 'pint';
          } else if (route.name === 'Gift') {
            iconName += 'gift-sharp';
          } else if (route.name === 'Other') {
            iconName += 'ellipsis-horizontal-sharp';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? '#3AB27B' : '#AEAEAE'}
              size={focused ? 28 : 26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: true,
        labelStyle: {
          fontSize: 11,
          fontWeight: '500',
          color: '#AEAEAE',
          bottom: 4,
        },
        activeTintColor: '#3AB27B',
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: Platform.OS === 'ios' ? 85 : 60,
        },
      }}>
      <Tabs.Screen name='Home' component={HomePage} />
      <Tabs.Screen name='Pay' component={PayPage} />
      <Tabs.Screen name='Order' component={OrderPage} />
      <Tabs.Screen name='Gift' component={GiftPage} />
      <Tabs.Screen name='Other' component={OtherPage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;

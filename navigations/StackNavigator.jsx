import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import HistoryPage from '../pages/HistoryPage';
import SignUpPage from '../pages/SignUpPage';
import DetailPage from '../pages/DetailPage';
import CateDetailPage from '../pages/CateDetailPage';
import OrderConfirmPage from '../pages/OrderConfirmPage';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='LoginPage' component={LoginPage} />
      <Stack.Screen name='SignUpPage' component={SignUpPage} />
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
      <Stack.Screen name='LogoutPage' component={LogoutPage} />
      <Stack.Screen name='HistoryPage' component={HistoryPage} />
      <Stack.Screen name='DetailPage' component={DetailPage} />
      <Stack.Screen name='CateDetailPage' component={CateDetailPage} />
      <Stack.Screen name='OrderConfirmPage' component={OrderConfirmPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

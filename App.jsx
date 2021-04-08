import React from 'react';
import { StyleSheet, LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import DetailPage from "../pages/DetailPage";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} /> */}
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      {/* <Stack.Screen name='DetailPage' component={DetailPage} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;

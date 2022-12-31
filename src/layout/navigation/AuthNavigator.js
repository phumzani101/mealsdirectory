import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../features/accounts/screens/LoginScreen";
import AccountScreen from "../../features/accounts/screens/AccountScreen";
import RegisterScreen from "../../features/accounts/screens/RegisterScreen";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Welcome" component={AccountScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default AuthNavigator;

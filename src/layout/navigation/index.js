import React, { useContext } from "react";
import { Text } from "react-native";
import { AuthContext } from "../../services/auth/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";
import AuthNavigator from "./AuthNavigator";

const Navigation = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuth ? <TabNavigation /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;

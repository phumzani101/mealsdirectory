import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import RestaurantNavigator from "./RestaurantNavigator";
import MapScreen from "../../features/maps/screens/MapScreen";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

const TAB_ICON = {
  Home: "fast-food",
  Map: "map",
  Settings: "settings",
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName = TAB_ICON[route.name];

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

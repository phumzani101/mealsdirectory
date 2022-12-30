import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestraurantScreen from "../../features/restaurants/screens/RestraurantScreen";
import RestraurantDetailScreen from "../../features/restaurants/screens/RestraurantDetailScreen";

const Stack = createStackNavigator();

function RestaurantNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Restraurant" component={RestraurantScreen} />
        <Stack.Screen
          name="RestraurantDetails"
          component={RestraurantDetailScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RestaurantNavigator;

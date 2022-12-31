import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import SettingsScreen from "../../features/settings/screens/SettingsScreen";
import FavouriteScreens from "../../features/favourites/screens/FavouriteScreens";

const Stack = createStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Setting" component={SettingsScreen} />
        <Stack.Screen name="Favourites" component={FavouriteScreens} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default SettingsNavigator;

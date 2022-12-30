import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestraurantScreen from "./src/features/restaurants/screens/RestraurantScreen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/layout/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { RestaurantContextProvider } from "./src/services/restraurants/RestaurantContext";
import { LocationContextProvider } from "./src/services/location/LocationContext";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

const TAB_ICON = {
  Restraurant: "fast-food",
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

export default function App() {
  let [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Restraurant" component={RestraurantScreen} />
                <Tab.Screen name="Map" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

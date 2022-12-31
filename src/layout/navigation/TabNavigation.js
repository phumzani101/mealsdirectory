import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import RestaurantNavigator from "./RestaurantNavigator";
import MapScreen from "../../features/maps/screens/MapScreen";
import { FavouriteContextProvider } from "../../services/favourites/FovouriteService";
import { LocationContextProvider } from "../../services/location/LocationContext";
import { RestaurantContextProvider } from "../../services/restraurants/RestaurantContext";
import SettingsNavigator from "./SettingsNavigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "fast-food",
  Map: "map",
  Acccount: "person",
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
    <FavouriteContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen
              name="Acccount"
              component={SettingsNavigator}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouriteContextProvider>
  );
};

export default TabNavigation;

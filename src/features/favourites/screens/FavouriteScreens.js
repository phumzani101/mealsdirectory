import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, FlatList } from "react-native";

import styled from "styled-components/native";
import { FavouriteContext } from "../../../services/favourites/FovouriteService";
import RestaurantItem from "../../restaurants/components/RestaurantItem";

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: "#fff";
  /* margin-top: ${StatusBar.currentHeight
    ? StatusBar.currentHeight + "px"
    : "0px"}; */
`;

const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export default function FavouriteScreens({ navigation }) {
  const { favourites } = useContext(FavouriteContext);

  const gotoResturantDetail = (item) => {
    navigation.navigate("RestraurantDetails", {
      restaurant: item,
    });
  };

  return (
    <>
      <SafeAreaViewContainer>
        <ListContainer
          data={favourites}
          renderItem={({ item }) => {
            return (
              <RestaurantItem
                restaurant={item}
                gotoResturantDetail={gotoResturantDetail}
              />
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaViewContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
}

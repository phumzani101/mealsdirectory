import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import RestaurantItem from "../components/RestaurantItem";

import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restraurants/RestaurantContext";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import RestaurantSearchBar from "../components/RestaurantSearchBar";

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

const LoaderContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const ActivityLoader = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export default function RestraurantScreen() {
  // const data = [{ name: 1 }, { name: 2 }, { name: 3 }];
  const { restaurants = [], isLoading } = useContext(RestaurantContext);

  return (
    <>
      <SafeAreaViewContainer>
        <RestaurantSearchBar />
        {isLoading && (
          <LoaderContainer>
            <ActivityLoader
              animating={true}
              color={MD2Colors.red800}
              size={50}
            />
          </LoaderContainer>
        )}
        <ListContainer
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantItem restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaViewContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
}

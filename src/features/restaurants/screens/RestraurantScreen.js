import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import SearchBarView from "../components/SearchBarView";
import RestaurantInfo from "../components/RestaurantInfo";

import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restraurants/RestaurantContext";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: "#fff";
  /* margin-top: ${StatusBar.currentHeight
    ? StatusBar.currentHeight + "px"
    : "0px"}; */
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
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
  const { restaurants = [], isLoading, error } = useContext(RestaurantContext);

  return (
    <>
      <SafeAreaViewContainer>
        <SearchContainer>
          <SearchBarView />
        </SearchContainer>
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
            return <RestaurantInfo restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaViewContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
}

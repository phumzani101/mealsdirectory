import React from "react";
import { SafeAreaView, StatusBar, ScrollView } from "react-native";

import styled from "styled-components/native";
import RestaurantDetails from "../components/RestaurantDetails";
import RestaurantItem from "../components/RestaurantItem";
import RestaurantList from "../components/RestaurantList";
const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: "#fff";
  /* margin-top: ${StatusBar.currentHeight
    ? StatusBar.currentHeight + "px"
    : "0px"}; */
`;

const DetailContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestraurantDetailScreen = ({ route }) => {
  const restaurant = route.params.restaurant;
  return (
    <SafeAreaViewContainer>
      <ScrollView>
        <DetailContainer>
          <RestaurantDetails restaurant={restaurant} />
          <RestaurantList />
        </DetailContainer>
      </ScrollView>
    </SafeAreaViewContainer>
  );
};

export default RestraurantDetailScreen;

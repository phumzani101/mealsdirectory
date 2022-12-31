import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { FavouriteContext } from "../../services/favourites/FovouriteService";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const Container = styled.View`
  padding: 16px;
  padding-top: 5px;
`;

const CardContainer = styled(Card)`
  margin-right: 10px;
  margin-bottom: 10px;
  max-width: 120px;
  /* height: 150px; */
  align-items: center;
`;

const Image = styled(Card.Cover)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const StyledText = styled(Text)`
  font-size: 12px;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  font-size: 12px;
  align-items: center;
`;

const FavouriteBar = ({ gotoResturantDetail, favourites }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <Container>
      <StyledTitle>Favourites</StyledTitle>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => (
          <TouchableOpacity
            onPress={() => gotoResturantDetail(restaurant)}
            key={restaurant.name}
          >
            <CardContainer>
              <Image source={{ uri: restaurant.photos[0] }} alt="pic" />
              <Card.Content>
                <StyledText>{restaurant.name}</StyledText>
              </Card.Content>
            </CardContainer>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
};

export default FavouriteBar;

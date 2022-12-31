import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { FavouriteContext } from "../../services/favourites/FovouriteService";

const Button = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 999;
`;

const FavouriteButton = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <Button
      onPress={() =>
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </Button>
  );
};

export default FavouriteButton;

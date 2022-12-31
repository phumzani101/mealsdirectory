import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/LocationContext";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantSearchBar = ({ isFavouriteToggled, setIsFavouriteToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(keyword || "");

  const onChangeSearch = (query) => setSearchQuery(query);
  const onSubmitEditing = () => {
    search(searchQuery);
  };

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <>
      <SearchContainer>
        <Searchbar
          icon={isFavouriteToggled ? "heart" : "heart-outline"}
          onIconPress={() => setIsFavouriteToggled(!isFavouriteToggled)}
          placeholder="Search for a location"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={onSubmitEditing}
        />
      </SearchContainer>
    </>
  );
};

export default RestaurantSearchBar;

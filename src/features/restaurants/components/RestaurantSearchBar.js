import React, { useContext } from "react";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/LocationContext";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantSearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(keyword || "");

  const onChangeSearch = (query) => setSearchQuery(query);
  const onSubmitEditing = () => {
    search(searchQuery);
  };

  return (
    <>
      <SearchContainer>
        <Searchbar
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

/* eslint-disable react/no-unstable-nested-components */
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Avatar, Button, List } from "react-native-paper";
import styled from "styled-components";
import { AuthContext } from "../../../services/auth/AuthContext";

const ListItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const StyledText = styled.Text`
  padding: ${(props) => props.theme.space[1]};
  align-items: center;
`;

const SettingsScreen = ({ navigation }) => {
  const { logout, user } = useContext(AuthContext);
  return (
    <View>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <StyledText>{user.email}</StyledText>
      </AvatarContainer>
      <List.Section>
        <ListItem
          title="Favourites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <ListItem
          title="Logout"
          // description="Item description"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={() => logout()}
        />
      </List.Section>
    </View>
  );
};

export default SettingsScreen;

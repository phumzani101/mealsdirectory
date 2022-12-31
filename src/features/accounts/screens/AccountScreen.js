import React from "react";
import styled from "styled-components/native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  Title,
} from "../components/AccountCover";
import { Button, Card } from "react-native-paper";

const AuthButton = styled(Button)`
  margin-top: ${(props) => props.theme.space[2]};
`;

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals Directory</Title>
      <AccountContainer>
        <Card.Content>
          <AuthButton
            icon="lock-open"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
            // buttonColor="black"
          >
            Login
          </AuthButton>
          <AuthButton
            icon="lock-open"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
            // buttonColor="white"
          >
            Register
          </AuthButton>
        </Card.Content>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;

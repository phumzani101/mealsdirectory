import { Text } from "react-native";
import { Card, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/accountbg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const AccountContainer = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[4]};
  background-color: rgba(255, 255, 255, 0.7);
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  margin-top: ${(props) => props.theme.space[3]};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
  color: red;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: white;
`;

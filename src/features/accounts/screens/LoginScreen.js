import React, { useContext } from "react";
import styled from "styled-components/native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/AccountCover";
import { ActivityIndicator, Button, MD2Colors } from "react-native-paper";
import { AuthContext } from "../../../services/auth/AuthContext";
import { Text } from "react-native";

const AuthButton = styled(Button)`
  margin-top: ${(props) => props.theme.space[2]};
`;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, error, isLoading } = useContext(AuthContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Signin</Title>
      <AccountContainer>
        {error && (
          <ErrorContainer>
            <Text>{error}</Text>
          </ErrorContainer>
        )}
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(text) => setPassword(text)}
        />
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => login({ email, password })}
            // buttonColor="white"
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
      </AccountContainer>
      <AuthButton
        icon="arrow-left"
        mode="contained"
        onPress={() => navigation.goBack()}
        // buttonColor="white"
      >
        Back
      </AuthButton>
    </AccountBackground>
  );
};

export default LoginScreen;

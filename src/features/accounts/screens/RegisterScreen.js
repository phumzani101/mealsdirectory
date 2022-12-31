import React, { useContext, useState } from "react";
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

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, error, isLoading } = useContext(AuthContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Register</Title>
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
        <AuthInput
          label="Confirm Password"
          value={confirmPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(text) => setConfirmPassword(text)}
        />

        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => register({ email, password, confirmPassword })}
            // buttonColor="white"
          >
            Register
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

export default RegisterScreen;

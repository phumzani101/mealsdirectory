import React from "react";
import { Platform, Text } from "react-native";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

const ImageWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Image = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Container = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

const SharedRestaurantInfo = ({ restaurant }) => {
  return (
    <Container>
      {isAndroid ? (
        <ImageWebView source={{ uri: restaurant.photos[0] }} alt="pic" />
      ) : (
        <Image source={{ uri: restaurant.photos[0] }} alt="pic" />
      )}
      <Text>{restaurant.name}</Text>
    </Container>
  );
};

export default SharedRestaurantInfo;

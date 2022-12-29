import React from "react";

// import { StyleSheet } from "react-native";
import {
  // Avatar,
  // Button,
  Card,
  Title,
  Paragraph,
  Text,
} from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import open from "../../../../assets/open";
import star from "../../../../assets/star";

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const StyledTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  /* font-size: ${(props) => props.theme.fontSizes.body}; */
`;

const StyledParagraph = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RatingRow = styled.View`
  flex-direction: row;
  /* padding: ${(props) => props.theme.space[2]}; */
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;

const RestaurantInfo = ({ restaurant }) => {
  const {
    name = "fuckery Restriction",
    icon,
    photos = [],
    address = "fuckery St",
    isOpenNow = true,
    rating = 4,
    isClosedTemporily = false,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <StyledCard>
      <Card.Cover source={{ uri: photos[0] }} key={name} />
      <Card.Content>
        <StyledTitle>{name}</StyledTitle>
        <Section>
          <RatingRow>
            {ratingArray.map((_, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </RatingRow>
          <SectionEnd>
            {isClosedTemporily && <Text variant="label">Closed</Text>}
            {isOpenNow && <Open xml={open} width={20} height={20} />}
          </SectionEnd>
        </Section>
        <StyledParagraph>{address}</StyledParagraph>
      </Card.Content>

      {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
    </StyledCard>
  );
};

// const styles = StyleSheet.create({});

export default RestaurantInfo;

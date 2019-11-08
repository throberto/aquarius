import React from "react";
import propTypes from "prop-types";
import logo from "../../assets/logotipo.png";

import {
  Container,
  Title,
  FlatList,
  ListItem,
  Thumbnail,
  AquarioName
} from "./styles";

const AquarioListComponent = props => (
  <Container>
    <Title>Aquarios de agua </Title>

    <FlatList
      // data={spots}
      // keyExtractor={spot => spot._id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <ListItem>
          <Thumbnail source={logo} />
          <AquarioName>Teste</AquarioName>
        </ListItem>
      )}
    />
  </Container>
);

export default AquarioListComponent;

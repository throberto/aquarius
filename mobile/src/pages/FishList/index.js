import React, { Component } from "react";

import FishListComponent from "../../components/FishList";

import { Container, View } from "./styles";

export default class FishList extends Component {
  render() {
    return (
      <Container>
        <View>
          <FishListComponent />
        </View>
      </Container>
    );
  }
}

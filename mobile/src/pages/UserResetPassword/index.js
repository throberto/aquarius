import React, { Component } from "react";
import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";

import { Container, View } from "./styles";

export default class UserResetPassword extends Component {
  render() {
    return (
      <Container behavior="padding">
        <LogoComponent />
        <View>
          <TextInputComponent name="Email" />
          <ButtonComponent name="Enviar" />
        </View>
      </Container>
    );
  }
}

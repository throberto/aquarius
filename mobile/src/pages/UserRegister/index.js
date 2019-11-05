import React, { Component } from "react";

import { KeyboardAvoidingView } from "react-native";
import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";

import { Container, View } from "./styles";

export default class UserRegister extends Component {
  render() {
    return (
      <Container behavior="padding">
        <LogoComponent />
        <View behavior="padding">
          <TextInputComponent name="Nome" />
          <TextInputComponent name="Email" />
          <TextInputComponent name="Senha" />
          <ButtonComponent name="Cadastrar" />
        </View>
      </Container>
    );
  }
}

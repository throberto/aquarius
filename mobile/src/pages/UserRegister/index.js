import React, { Component } from "react";

import { KeyboardAvoidingView } from "react-native";
import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";

import { Container } from "./styles";

export default class UserSignIn extends Component {
  render() {
    return (
      <Container behavior="padding">
        <LogoComponent />
        <TextInputComponent name="Nome" />
        <TextInputComponent name="Email" />
        <TextInputComponent name="Senha" />
        <ButtonComponent name="Cadastrar" />
      </Container>
    );
  }
}

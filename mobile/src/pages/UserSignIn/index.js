import React, { Component } from "react";

import { TouchableOpacity } from "react-native";
import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";

import { Container, BtnText, View } from "./styles";

export default class UserSignIn extends Component {
  render() {
    return (
      <Container behavior="padding">
        <LogoComponent />
        <View>
          <TextInputComponent name="Email" />
          <TextInputComponent name="Senha" />
          <ButtonComponent name="Entrar" />
          <TouchableOpacity>
            <BtnText>Criar conta grátis</BtnText>
          </TouchableOpacity>
          <TouchableOpacity>
            <BtnText>Esqueceu sua senha?</BtnText>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

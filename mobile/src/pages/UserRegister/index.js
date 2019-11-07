import React, { Component } from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";

import { Container, View } from "./styles";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

export default class UserRegister extends Component {
  static navigationOptions = {
    title: "Criar Conta",
    headerStyle: {
      backgroundColor: "#0099ff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <Container behavior="padding">
        <LogoComponent />
        <View behavior="padding">
          <TextInputComponent placeholder="Nome" borderRadius={30} />
          <TextInputComponent
            placeholder="Email"
            keyboardType="email-address"
            borderRadius={30}
          />
          <TextInputComponent
            placeholder="Senha"
            secureTextEntry={true}
            borderRadius={30}
          />
          <ButtonComponent title="Cadastrar" borderRadius={30} />
        </View>
      </Container>
    );
  }
}

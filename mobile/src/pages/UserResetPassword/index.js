import React, { Component } from "react";
import { StatusBar } from "react-native";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";

import { Container, View } from "./styles";

export default class UserResetPassword extends Component {
  static navigationOptions = {
    title: "Recuperar Senha",
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
        <View>
          <TextInputComponent placeholder="Email" keyboardType="email-address" />
          <ButtonComponent name="Enviar" />
        </View>
      </Container>
    );
  }
}

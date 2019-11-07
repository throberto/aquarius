import React, { Component } from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";

import { Container, View } from "./styles";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

export default class HelpRegister extends Component {
  static navigationOptions = {
    title: "Ajuda",
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
        <View behavior="padding">

          <TextInputComponent
            placeholder="Email"
            keyboardType="email-address"
          />

          <ButtonComponent title="Enviar" />
        </View>
      </Container>
    );
  }
}

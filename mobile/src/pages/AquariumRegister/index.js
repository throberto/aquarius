import React, { Component } from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import PickerComponent from "../../components/Picker";

import { Container, View } from "./styles";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

export default class AquariumRegister extends Component {
  static navigationOptions = {
    title: "Cadastrar aquario",
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
          <TextInputComponent placeholder="Nome" />
          <TextInputComponent
            placeholder="Descrição"
            // keyboardType="email-address"
          />
          <TextInputComponent placeholder="Altura (cm)" />
          <TextInputComponent placeholder="Largura (cm)" />
          <TextInputComponent placeholder="Comprimento (cm)" />
          <PickerComponent />
          <ButtonComponent title="Cadastrar" />
        </View>
      </Container>
    );
  }
}

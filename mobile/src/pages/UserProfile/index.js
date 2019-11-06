import React, { Component } from "react";
import { StatusBar, Text } from "react-native";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";

import { Container, View } from "./styles";

export default class UserProfile extends Component {
  static navigationOptions = {
    title: "Perfil",
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
      <Container>
        <View>
          <TextInputComponent placeholder="Email" keyboardType="email-address" />
          <TextInputComponent placeholder="Senha atual" />
          <TextInputComponent placeholder="Nova senha" />
          <TextInputComponent placeholder="Confirmar senha" />

          <ButtonComponent title="Atualizar" />
          <ButtonComponent title="Deletar conta" />
        </View>
      </Container>
    );
  }
}

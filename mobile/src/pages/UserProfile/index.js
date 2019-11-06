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
          <TextInputComponent
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInputComponent
            placeholder="Senha atual"
            secureTextEntry={true}
          />
          <TextInputComponent placeholder="Nova senha" secureTextEntry={true} />
          <TextInputComponent
            placeholder="Confirmar senha"
            secureTextEntry={true}
          />

          <ButtonComponent title="Atualizar" />
          <ButtonComponent title="Deletar conta" />
        </View>
      </Container>
    );
  }
}

import React, { Component } from "react";
import { StatusBar, Alert } from "react-native";

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

  state = {
    email: ""
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handleResetPasswordPress = async () => {
    if (this.state.email.length === 0) {
      Alert.alert("Atenção", "Informe seu e-mail.");
    } else {
      Alert.alert("Bem Vindo", "E-mail: " + this.state.email);
    }
  };

  render() {
    return (
      <Container behavior="padding">
        <LogoComponent />
        <View>
          <TextInputComponent
            placeholder="Email"
            keyboardType="email-address"
            borderRadius={30}
            onChangeText={this.handleEmailChange}
            value={this.setState.email}
          />
          <ButtonComponent
            name="Enviar"
            borderRadius={30}
            onPress={() => this.handleResetPasswordPress()}
          />
        </View>
      </Container>
    );
  }
}

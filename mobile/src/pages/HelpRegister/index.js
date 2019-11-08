import React, { Component } from "react";
import { KeyboardAvoidingView, StatusBar, Alert } from "react-native";

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

  state = {
    email: ""
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handleHelpRegisterPress = async () => {
    if (this.state.email.length === 0) {
      Alert.alert("Atenção", "Informe seu e-mail.");
    } else {
      Alert.alert("Bem Vindo", "E-mail: " + this.state.email);
    }
  };

  render() {
    return (
      <Container behavior="padding">
        <View behavior="padding">
          <TextInputComponent
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={this.handleEmailChange}
            value={this.setState.email}
          />

          <ButtonComponent
            title="Enviar"
            onPress={() => this.handleHelpRegisterPress()}
          />
        </View>
      </Container>
    );
  }
}

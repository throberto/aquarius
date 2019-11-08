import React, { Component } from "react";
import { KeyboardAvoidingView, StatusBar, Alert } from "react-native";

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

  state = {
    name: "",
    email: "",
    password: ""
  };

  handleNameChange = name => {
    this.setState({ name });
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleRedisterPress = async () => {
    if (
      this.state.name.length === 0 ||
      this.state.email.length === 0 ||
      this.state.password.length === 0
    ) {
      Alert.alert("Atenção", "Preencha todos os campo.");
    } else {
      Alert.alert(
        "Bem Vindo!",
        "Nome: " +
          this.state.name +
          " E-mail: " +
          this.state.email +
          " Senha: " +
          this.state.password
      );
    }
  };

  render() {
    return (
      <Container behavior="padding">
        <LogoComponent />
        <View behavior="padding">
          <TextInputComponent
            placeholder="Nome"
            borderRadius={30}
            onChangeText={this.handleNameChange}
            value={this.state.name}
          />
          <TextInputComponent
            placeholder="Email"
            keyboardType="email-address"
            borderRadius={30}
            onChangeText={this.handleEmailChange}
            value={this.state.email}
          />
          <TextInputComponent
            placeholder="Senha"
            secureTextEntry={true}
            borderRadius={30}
            onChangeText={this.handlePasswordChange}
            value={this.state.password}
          />
          <ButtonComponent
            title="Cadastrar"
            borderRadius={30}
            onPress={() => this.handleRedisterPress()}
          />
        </View>
      </Container>
    );
  }
}

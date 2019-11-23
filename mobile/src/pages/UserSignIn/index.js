import React, { Component } from "react";
import { StatusBar, TouchableOpacity, Alert } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";
import TextButtonComponent from "../../components/TextButton";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

import { Container, View } from "./styles";

export default class UserSignIn extends Component {
  static navigationOptions = {
    title: "Aquarius",
    headerStyle: {
      backgroundColor: "#0099ff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    email: "",
    password: ""
  };

  handleUserRegisterPress = () => {
    this.props.navigation.navigate("UserRegister");
    this.props.navigation.navigate("AquariumRegister");
  };

  handleUserResetPasswordPress = () => {
    this.props.navigation.navigate("UserResetPassword");
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handleUserAccessPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      Alert.alert("Atenção", "Usuário/Senha são obrigatórios.");
    } else {
      Alert.alert(
        "Bem Vindo",
        "Email: " + this.state.email + " Senha: " + this.state.password
      );
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
            title="Entrar"
            onPress={() => this.handleUserAccessPress()}
            borderRadius={30}
          />

          <TextButtonComponent
            title="Registrar"
            onPress={() => this.handleUserRegisterPress()}
          />
          <TextButtonComponent
            title="Esqueceu sua senha?"
            onPress={() => this.handleUserResetPasswordPress()}
          />
        </View>
      </Container>
    );
  }
}

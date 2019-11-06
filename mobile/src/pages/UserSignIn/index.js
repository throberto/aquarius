import React, { Component } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";

StatusBar.setBackgroundColor("#0042FF");
StatusBar.setBarStyle("light-content");

import { Container, BtnText, View } from "./styles";

export default class UserSignIn extends Component {
  static navigationOptions = {
    title: "Aquarius",
    headerStyle: {
      backgroundColor: "#0042FF"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  handleUserRegisterPress = () => {
    this.props.navigation.navigate("UserRegister");
  };

  handleUserResetPasswordPress = () => {
    this.props.navigation.navigate("UserResetPassword");
  };

  handleUserAccessPress = async () => {
    // axios
  };

  render() {
    return (
      <Container behavior="padding">
        <LogoComponent />
        <View>
          <TextInputComponent name="Email" />
          <TextInputComponent name="Senha" />
          <ButtonComponent
            title="Entrar"
            onPress={() => this.handleUserAccessPress()}
          />
          <TouchableOpacity onPress={() => this.handleUserRegisterPress()}>
            <BtnText>Criar conta grátis</BtnText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleUserResetPasswordPress()}>
            <BtnText>Esqueceu sua senha?</BtnText>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

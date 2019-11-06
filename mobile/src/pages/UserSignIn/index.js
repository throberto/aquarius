import React, { Component } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

import { Container, BtnText, View } from "./styles";

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

  handleUserRegisterPress = () => {
    this.props.navigation.navigate("UserRegister");
  };

  handleUserResetPasswordPress = () => {
    this.props.navigation.navigate("UserResetPassword");
  };

  // handleUserAccessPress = async () => {
  // axios
  // };

  handleUserAccessPress = () => {
    this.props.navigation.navigate("UserProfile")
  }

  render() {
    return (
      <Container behavior="padding">
        <LogoComponent />
        <View>
          <TextInputComponent placeholder="Email" keyboardType="email-address" />
          <TextInputComponent placeholder="Senha" />
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

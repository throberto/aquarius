import React, { Component } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
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
          <TextInputComponent
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInputComponent placeholder="Senha" secureTextEntry={true} />
          <ButtonComponent
            title="Entrar"
            onPress={() => this.handleUserAccessPress()}
            inputColor="#0099ff"
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

import React, { Component } from "react";
import { StatusBar, ScrollView } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

import { Container, BtnText, View } from "./styles";

export default class UserSignIn extends Component {
  static navigationOptions = {
    title: "Navegação",
    headerStyle: {
      backgroundColor: "#0099ff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  handleUserSignIn = () => {
    this.props.navigation.navigate("UserSignIn");
  };

  handleUserRegister = () => {
    this.props.navigation.navigate("UserRegister");
  };

  handleUserResetPassword = () => {
    this.props.navigation.navigate("UserResetPassword");
  };

  handleAbout = () => {
    this.props.navigation.navigate("About");
  };

  handleAquariumDetails = () => {
    this.props.navigation.navigate("AquariumDetails");
  };

  handleFishList = () => {
    this.props.navigation.navigate("FishList");
  };

  handleHelpRegister = () => {
    this.props.navigation.navigate("HelpRegister");
  };

  handleHome = () => {
    this.props.navigation.navigate("Home");
  };

  handleReminderList = () => {
    this.props.navigation.navigate("ReminderList");
  };

  handleReminderRegister = () => {
    this.props.navigation.navigate("ReminderRegister");
  };

  handleAquariumRegister = () => {
    this.props.navigation.navigate("AquariumRegister");
  };

  handleUserProfile = () => {
    this.props.navigation.navigate("UserProfile");
  };
  render() {
    return (
      <ScrollView>
        <Container behavior="padding">
          <View>
            <ButtonComponent
              title="UserSignIn"
              onPress={() => this.handleUserSignIn()}
            />
            <ButtonComponent
              title="UserRegister"
              onPress={() => this.handleUserRegister()}
            />
            <ButtonComponent
              title="UserResetPassword"
              onPress={() => this.handleUserResetPassword()}
            />
            <ButtonComponent title="About" onPress={() => this.handleAbout()} />
            <ButtonComponent
              title="AquariumDetails"
              onPress={() => this.handleAquariumDetails()}
            />
            <ButtonComponent
              title="FishList"
              onPress={() => this.handleFishList()}
            />
            <ButtonComponent
              title="HelpRegister"
              onPress={() => this.handleHelpRegister()}
            />
            <ButtonComponent title="Home" onPress={() => this.handleHome()} />
            <ButtonComponent
              title="ReminderList"
              onPress={() => this.handleReminderList()}
            />
            <ButtonComponent
              title="ReminderRegister"
              onPress={() => this.handleReminderRegister()}
            />
            <ButtonComponent
              title="AquariumRegister"
              onPress={() => this.handleAquariumRegister()}
            />
            <ButtonComponent
              title="UserProfile"
              onPress={() => this.handleUserProfile()}
            />
          </View>
        </Container>
      </ScrollView>
    );
  }
}

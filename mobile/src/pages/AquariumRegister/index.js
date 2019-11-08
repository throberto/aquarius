import React, { Component } from "react";
import { KeyboardAvoidingView, StatusBar, Alert } from "react-native";

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import PickerComponent from "../../components/Picker";

import { Container, View } from "./styles";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

export default class AquariumRegister extends Component {
  static navigationOptions = {
    title: "Cadastrar aquario",
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
    description: "",
    height: "",
    width: "",
    length: ""
  };

  handleNameChange = name => {
    this.setState({ name });
  };
  handleDescriptionChange = description => {
    this.setState({ description });
  };
  handleHeightChange = height => {
    this.setState({ height });
  };
  handleWidthChange = width => {
    this.setState({ width });
  };
  handleLengthChange = length => {
    this.setState({ length });
  };

  handleAquariumRegisterPress = async () => {
    if (
      this.state.name.length === 0 ||
      this.state.description.length === 0 ||
      this.state.height.length === 0 ||
      this.state.width.length === 0 ||
      this.state.length.length === 0
    ) {
      Alert.alert("Atenção", "Preencha todos os campo.");
    } else {
      Alert.alert(
        "Bem Vindo",
        "Nome: " +
          this.state.name +
          " Descrição: " +
          this.state.description +
          " Altura: " +
          this.state.height +
          " Largura: " +
          this.state.width +
          " Comprimento: " +
          this.state.length
      );
    }
  };

  render() {
    return (
      <Container behavior="padding">
        <View behavior="padding">
          <TextInputComponent
            placeholder="Nome"
            value={this.state.name}
            onChangeText={this.handleNameChange}
          />
          <TextInputComponent
            placeholder="Descrição"
            // keyboardType="email-address"
            value={this.state.description}
            onChangeText={this.handleDescriptionChange}
          />
          <TextInputComponent
            placeholder="Altura (cm)"
            value={this.state.height}
            onChangeText={this.handleHeightChange}
          />
          <TextInputComponent
            placeholder="Largura (cm)"
            value={this.state.width}
            onChangeText={this.handleWidthChange}
          />
          <TextInputComponent
            placeholder="Comprimento (cm)"
            value={this.state.length}
            onChangeText={this.handleLengthChange}
          />
          <PickerComponent />
          <ButtonComponent
            title="Cadastrar"
            onPress={() => this.handleAquariumRegisterPress()}
          />
        </View>
      </Container>
    );
  }
}

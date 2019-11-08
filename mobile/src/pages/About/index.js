import React, { Component } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";
import TextButtonComponent from "../../components/TextButton";

StatusBar.setBackgroundColor("#1793F9");
StatusBar.setBarStyle("light-content");

import { Container, View, TitleText, AboutText } from "./styles";

export default class About extends Component {
  static navigationOptions = {
    title: "Sobre",
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
      <Container behavior="padding">
        <LogoComponent />
        <View>
          <TitleText>Sobre nós</TitleText>

          <AboutText>
            Os peixes são a Quarta categoria de animais de estimação mais comuns
            no Brasil, atrás apenas de gatos, aves e cães, segundo o o Instituto
            Brasileiro de Geografia e Estatísticas (IBGE2015). são 18 milhões de
            peixes ornamentais criados no país. Com essa demanda cada vez mais
            crescente de mercado, muitos entusiastas acabam entrando para o
            mundo do aquarismo sem o conhecimento dos cuidados básicos a se ter
            e acabam se perdendo e cometendo erros que muitas vezes podem ser
            fatais os peixes. Visando ajudas essas pessoas, a proposta se baseia
            na criação de uma ferramenta que auxiliará na criação e manutenção
            de um aquário.
          </AboutText>
        </View>
      </Container>
    );
  }
}

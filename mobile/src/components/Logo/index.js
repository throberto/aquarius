import React from "react";
import { View, Text, Image } from "react-native";
import { Container, LogoImage } from "./styles";
import logo from "../../assets/logo.png";
const LogoComponent = props => (
  <Container>
    <LogoImage source={logo} />
  </Container>
);

export default LogoComponent;

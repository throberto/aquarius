import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Button, ButtonText } from "./styles";

const ButtonComponent = props => (
  <Button>
    <ButtonText>{props.name}</ButtonText>
  </Button>
);

ButtonComponent.defaultsProps = {
  name: "Login"
};

export default ButtonComponent;

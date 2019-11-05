import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "./styles";

const TextInputComponent = props => (
  <View>
    <TextInput placeholder={(text = props.name)} />
  </View>
);

TextInputComponent.defaultsProps = {
  name: "Digite seu email"
};

export default TextInputComponent;

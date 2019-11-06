import React from "react";
import { View, Text } from "react-native";
import propTypes from 'prop-types';

import { TextInput } from "./styles";

const TextInputComponent = props => (
  <View>
    <TextInput
      placeholder={props.placeholder}
      autoCapitalize="none"
      autoCorret={false}
      onChangeText={props.onChangeText}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
    />
  </View>
);

TextInputComponent.propTypes = {
  placeholder: propTypes.string,
  onChangeText: propTypes.func,
  value: propTypes.string,
  secureTextEntry: propTypes.bool,
  keyboardType: propTypes.string,
};

TextInputComponent.defaultProps = {
  placeholder: 'Digite...',
  onChangeText: null,
  // value: '',
  secureTextEntry: false,
  keyboardType: 'default',
};
export default TextInputComponent;


import React from "react";
import propTypes from "prop-types";
import { TouchableOpacity } from "react-native";

import { BtnText } from "./styles";
const TextButtonComponent = props => (
  <TouchableOpacity onPress={props.onPress}>
    <BtnText>{props.title}</BtnText>
  </TouchableOpacity>
);

TextButtonComponent.propTypes = {
  title: propTypes.string.isRequired,
  onPress: propTypes.func
};

TextButtonComponent.defaultProps = {
  title: "Pressione",
  onPress: null
};

export default TextButtonComponent;

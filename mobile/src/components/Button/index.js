import React from "react";
import propTypes from "prop-types";

import { Button, ButtonText } from "./styles";
import ButtonStyles from "./styles";

const ButtonComponent = props => (
  <Button onPress={props.onPress} style={ButtonStyles(props).button}>
    <ButtonText>{props.title}</ButtonText>
  </Button>
);

ButtonComponent.propTypes = {
  title: propTypes.string.isRequired,
  onPress: propTypes.func,
  buttonColor: propTypes.string,
  borderRadius: propTypes.number
};

ButtonComponent.defaultProps = {
  title: "Pressione",
  onPress: null,
  buttonColor: "#0099ff",
  borderRadius: 5
};

export default ButtonComponent;

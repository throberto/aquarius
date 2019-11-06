import React from "react";
import propTypes from "prop-types";

import { Button, ButtonText } from "./styles";

const ButtonComponent = props => (
  <Button onPress={props.onPress}>
    <ButtonText>{props.title}</ButtonText>
  </Button>
);

ButtonComponent.propTypes = {
  title: propTypes.string.isRequired,
  onPress: propTypes.func
};

ButtonComponent.defaultProps = {
  title: "Pressione",
  onPress: null
};

export default ButtonComponent;

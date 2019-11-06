import React from "react";
import PropTypes from "prop-types";

import { Button, ButtonText } from "./styles";

const ButtonComponent = props => (
  <Button onPress={props.onPress}>
    <ButtonText>{props.title}</ButtonText>
  </Button>
);

ButtonComponent.PropTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

ButtonComponent.defaultProps = {
  title: "Pressione",
  onPress: null
};

export default ButtonComponent;

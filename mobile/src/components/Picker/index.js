import React from "react";
import propTypes from "prop-types";

import { Button, ButtonText, Picker } from "./styles";

const PickerComponent = props => (
  <Picker
    selectedValue="default"
    // style={{ height: 50, width: 100 }}
    // onValueChange={(itemValue, itemIndex) =>
    //   this.setState({ language: itemValue })
    // }
  >
    <Picker.Item label="Selecione o ambiente" value="default" />
    <Picker.Item label="Agua doce" value="aguaDoce" />
    <Picker.Item label="Agua salgada" value="aguaSalgada" />
  </Picker>
);

export default PickerComponent;

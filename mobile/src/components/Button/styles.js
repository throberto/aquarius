import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Button = styled.TouchableOpacity`
  /* background: #0099ff; */
  border: 2px solid;
  /* border-radius: 30; */
  height: 50;
  width: 300;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  color: #fdfdfd;
  font-weight: bold;
  font-size: 18;
`;

const ButtonStyles = props =>
  StyleSheet.create({
    button: {
      backgroundColor: props.buttonColor,
      borderRadius: props.borderRadius,
      borderColor: props.buttonColor
    }
  });

export default ButtonStyles;

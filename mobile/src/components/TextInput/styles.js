import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const TextInput = styled.TextInput`
  padding: 11px;
  padding-left: 15;
  padding-right: 15;
  /* border-radius: 50; */
  background-color: #f5f5f5;
  align-self: stretch;
  font-size: 16;
  width: 300;
  justify-content: center;
  margin-bottom: 10;
`;

const TextInputStyles = props =>
  StyleSheet.create({
    input: {
      borderRadius: props.borderRadius
    }
  });

export default TextInputStyles;

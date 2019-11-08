import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 30;
`;

export const Title = styled.Text`
  font-size: 20;
  color: #444;
  padding: 30px;
  margin-bottom: 15;
`;

export const FlatList = styled.FlatList`
  padding: 20px;
`;

export const ListItem = styled.View`
  margin-right: 15;
`;

export const Thumbnail = styled.Image`
  width: 200;
  height: 120;
  resize: "cover";
  border-radius: 2;
`;

export const AquarioName = styled.Text`
  font-size: 24;
  font-weight: "bold";
  color: #333;
  margin-top: 10;
`;

import React, { Component } from "react";

import { View, Text } from "react-native";

import ReminderComponents from "../../components/Reminder";
import { DateTittle } from './styles';

export default class ReminderList extends Component {
  render() {
    return (
      <View>
        <DateTittle>Hoje</DateTittle>
        <ReminderComponents />
        <ReminderComponents />
      </View>
    );
  }
}

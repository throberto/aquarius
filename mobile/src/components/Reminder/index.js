import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { ReminderBody, Tittle, Description } from './styles';

export default class Reminder extends Component {
  render() {
    return (
      <ReminderBody>
        <Tittle>Alimentação</Tittle>
        <Description>Alimentar o meu aquario pika!</Description>
      </ReminderBody>
    );
  }
}

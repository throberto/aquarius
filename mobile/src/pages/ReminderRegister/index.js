import React, { Component } from "react";
import DatePicker from "react-native-datepicker";

import ButtonComponent from "../../components/Button";
import TextInputComponent from "../../components/TextInput";
import LogoComponent from "../../components/Logo";

import { Container, View, Button, Logo } from "./styles";

export default class ReminderRegister extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "" };
  }

  render() {
    return (
      <Container>
        <Logo>
          <LogoComponent />
        </Logo>
        <View>
          <TextInputComponent placeholder="Titulo" />
          <TextInputComponent placeholder="Descrição" />

          <DatePicker
            style={{ width: 300 }}
            date={this.state.date}
            mode="datetime"
            placeholder="Selecionar Data e Hora"
            format="DD-MM-YYYY HH:mm"
            is24Hour={true}
            minDate="2016-05-01"
            maxDate="2025-12-31"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }}
          />
          <Button>
            <ButtonComponent title="Cadastrar Notificação" />
          </Button>
        </View>
      </Container>
    );
  }
}

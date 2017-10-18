import React from "react"
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight,
StatusBar } from 'react-native';

class AppointmentScreen extends React.Component {

  static navigationOptions = {
    title: 'Appointments',
  };
  render() {
    return (
      <View>
        <Text>Appointments</Text>
      </View>
    );
  }
}
export default AppointmentScreen;

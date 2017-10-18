import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight,
StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Notes from "../components/Notes"

class NoteScreen extends React.Component {
  static navigationOptions = {
    title: 'Notes',
  };
  render() {
    return (
      <View>
        <Text>Here you can write notes about whatever you want.</Text>
        <Text>The content is saved automatically.</Text>
        <Notes />
      </View>
      );
    }
}
export default NoteScreen

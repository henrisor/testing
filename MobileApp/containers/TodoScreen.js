import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight,
StatusBar } from 'react-native';
import Todo from "../components/Todo"

class TodoScreen extends React.Component {
  static navigationOptions = {
    title: 'Todo-list',
  };
  render() {
    return (
      <View>
        <Text>Todo</Text>
      </View>
    );
  }
}
export default TodoScreen;

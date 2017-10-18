import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight,
StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NoteScreen from "./containers/NoteScreen"
import TodoScreen from "./containers/TodoScreen"
import AppointmentScreen from "./containers/AppointmentScreen"

//displays the homescreen with the images as links
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Personal information manager'
  };
  render() {
    const { navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "dark-content" hidden = {true}/>
        <Text style={styles.text}>
          Make todo-list</Text>
        <TouchableHighlight onPress={() => navigate('Todo')}>
          <Image style={styles.images} source=
          {require('./img/todo.png')} />
        </TouchableHighlight>
        <Text style={styles.text}>
          Make appointments</Text>
        <TouchableHighlight onPress={() => navigate('Appointments')}>
          <Image style={styles.images} source=
          {require('./img/appoint.png')} />
        </TouchableHighlight>
        <Text style={styles.text}>
          Take notes  </Text>
        <TouchableHighlight onPress={() => navigate('Notes')}>
          <Image style={styles.images} source=
          {require('./img/notes.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Todo: { screen: TodoScreen },
  Notes: { screen: NoteScreen},
  Appointments: { screen: AppointmentScreen}
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  images: {
    height: 170,
    width: 190,
    resizeMode: "stretch",
  }
});

import React, { Component } from "react";
import { AsyncStorage, Text, View, TextInput, StyleSheet, Button, Image } from "react-native";

class Notes extends Component {
  state = {
    "notes": ""
  }
  clearNotes = () => {
    AsyncStorage.setItem("notes", "");
    this.setState({"notes": ""})
  }
  componentDidMount = () => AsyncStorage.getItem("notes").then((value) =>
  this.setState({ "notes": value}))

  setNotes = (value) => {
      AsyncStorage.setItem('notes', value);
      this.setState({"notes": value})
   }

  render() {
    return (
    <View>
    <Button
      onPress={this.clearNotes}
      title="Clear Notes"
    />
      <Image style={styles.image} source=
      {require("../img/noteback.jpg")}>
        <TextInput style={styles.textContainer}
        value={this.state.notes}
        multiline= {true}
        blurOnSubmit={false}
        onChangeText = {this.setNotes}
        autoGrow = {true}/>
        </Image>

    </View>
    )
  }
}
export default Notes;

const styles = StyleSheet.create({
  textContainer: {
    height: '100%',
    width: '100%',
    textAlignVertical: "top",
    fontSize: 29,
},
image: {
  height: "100%",
  width: "100%",
},

})

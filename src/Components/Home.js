import React, { Component } from 'react';
import '../Containers/App.css';
import {Cards} from "./Cards"

class Home extends Component {
  render() {
    return (
        <div className="Home">
          <h1>Welcome to your personal information manager</h1>
          <h2>Here you can create todo-lists, make appointments and write notes</h2>
          <Cards />
        </div>
    );
  }
}

export default Home;

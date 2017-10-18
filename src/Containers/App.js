import React, { Component } from 'react';
import './App.css';
import InputTodo from '../Components/InputTodo';
import Footer from "../Components/Footer";
import { NavBar } from "../Components/NavBar.js"
import Notes from "../Components/Notes.js";
import Appointment from "../Components/Appointment.js"
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../Components/Home"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/Todo" component={InputTodo}/>
          <Route exact path="/Appointments" component={Appointment}/>
          <Route exact path="/Notes" component={Notes}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/" component={Home}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

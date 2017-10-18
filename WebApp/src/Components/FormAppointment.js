import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const today = new Date();
var todayfix = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
console.log(todayfix);
class FormAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
      value24: null,
      valuedate: null
    };
    this.handleChangeTimePicker24 = this.handleChangeTimePicker24.bind(this);
    this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnState = this.returnState.bind(this);
  }

  returnState () {
    return this.props.items;
  }

  addInput({input}) {
    this.setState({value: input})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }



  handleChangeTimePicker24(event, date){
    this.setState({value24: date});
  }

  handleChangeDatePicker(event, date){
    this.setState({valuedate: date,});
  };
    
    
  handleSubmit(event, date) {
    
    var datovar = new Date(this.state.valuedate);
    var datofix = datovar.getDate()+'/'+(datovar.getMonth()+1)+'/'+datovar.getFullYear();
    var timevar = new Date(this.state.value24);
    var timefix = timevar.getHours()+':'+('0'+timevar.getMinutes()).slice(-2);
      
    //var fullitem = "Klokken" +timefix+ "den" + datofix + ":";
    //console.log(fullitem);
    
    
    /*localStorage.setItem("allitems", fullitem);
    localStorage.setItem("clock", timefix);
    localStorage.setItem("day", datofix);
    localStorage.setItem("what", this.state.value);*/
    /*this.state.items.push(localStorage.getItem("allitems"));
    this.setState({value: event.target.value});
    this.setState({value24: date});
    this.setState({valuedate: date});
    this.setState({value: ""});*/
    if(datofix===todayfix && (timevar.getHours() >= today.getHours() && timevar.getMinutes() >= today.getMinutes())){
      let underScoreString = this.state.value.replace(/ /g,"_");
      console.log(timevar.getHours(), )
      //console.log(underScoreString);
      this.state.items.push(underScoreString);
      this.setState({value: event.target.value});
      localStorage.setItem("test2", localStorage.getItem("test2") + " " + "_Klokken_" + timefix + "_den_" + datofix + ":___"  + underScoreString );
      this.setState({value: ""});
      this.setState({value24: ""});
      this.setState({valuedate: ""});
      this.renderRow();
      event.preventDefault();
    } else {
        alert("Tiden må være etter nåværende tidspunkt.")
    }
    
  }

  renderRow() {
    let newList = "" + localStorage.getItem("test2");
    let wordArray = this.turnFakeListtoRealList(newList);
    //console.log(wordArray);
    let w = wordArray.map(function(item,index){ return item.replace(/_/g, " ")});
    //console.log(w);
    let listItems = w.map((l, index) =>
    <li key = {index} id="appointmentitem"><button id="removeAppointment" onClick={() => this.removeItem(index)}>{l}</button> </li>
    );
    return listItems
  }

  turnFakeListtoRealList(list) {
    let i = "" + list.replace(/"/g, '');
    let y = i.replace(/[[\]']+/g,'');
    let b = y.replace(/,/g, ' ');
    let words = b;
    let wordArray = words.split(' ');
    return wordArray
  }
  removeItem(index) {
    let list2 = localStorage.getItem("test2");
    let list = this.turnFakeListtoRealList(list2);
    list.splice(index,1);
    this.setState({items: list});
    localStorage.setItem("test2", JSON.stringify(list));
  }

  

  render() {

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <MuiThemeProvider>
                <DatePicker
                    minDate={today}
                    hintText="Dato"
                    firstDayOfWeek={0}
                    value={this.state.valuedate}
                    onChange={this.handleChangeDatePicker}
                    required
                />
        </MuiThemeProvider>
        <MuiThemeProvider>
                <TimePicker
                    minDate={today}
                    hintText="Klokkeslett"
                    format="24hr"
                    value={this.state.value24}
                    onChange={this.handleChangeTimePicker24}
                    required
                />
        </MuiThemeProvider>
        <label>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            required
            maxLength="50"
          />
        </label>

        <input type="submit" value="Add event" id="submitButton"/>
      </form>
      <ul>
        {this.renderRow()}
      </ul>
    </div>
    );
  }
}

export default FormAppointment;

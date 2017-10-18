import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
    this.state.items.push("KL: " +timefix+ " DATO: " + datofix + " HVA: " +this.state.value);
    this.setState({value: event.target.value});
    this.setState({value24: date});
    this.setState({valuedate: date});
    this.setState({value: ""});
    event.preventDefault();
  }

  renderRow() {
    let listItems = this.state.items.map((l, index) =>
    <li key = {index} id="appointmentList"> {l} <button id="removeAppointment" value={this.props.items} onClick={() => this.removeItem(index)}/> </li>
    );
    return listItems;
  }

  removeItem(index) {
    let list = this.state.items;
    list.splice(index,1);
    this.setState({items: list});
  }




  render() {

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <MuiThemeProvider>
                <DatePicker
                    hintText="Dato"
                    firstDayOfWeek={0}
                    value={this.state.valuedate}
                    onChange={this.handleChangeDatePicker}
                    required
                />
                <TimePicker
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
            maxlength="50"
          />
        </label>

        <input type="submit" value="Submit"/>
      </form>
      <ul>
        {this.renderRow()}
      </ul>
    </div>
    );
  }
}

export default FormAppointment;

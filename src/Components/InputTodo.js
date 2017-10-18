import React, {Component} from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnState = this.returnState.bind(this);
  }

  returnState () {
    return this.props.items;
  }

  addInput({input}) {
    this.setState({value: input});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(document.getElementById("textarea").value !== "") {

    if (event.which === 13) {
      let underScoreString = this.state.value.replace(/ /g,"_");
      console.log(underScoreString);
      this.state.items.push(underScoreString);
      this.setState({value: event.target.value});
      localStorage.setItem("test", localStorage.getItem("test") + " " + underScoreString);
      this.setState({value: ""});
      this.renderRow();
      event.preventDefault();
    }
  }
  else {
    return false;
  }
}
  removeItem( index) {
    let list2 = localStorage.getItem("test");
    let list = this.turnFakeListtoRealList(list2);
    list.splice(index,1);
    this.setState({items: list});
    localStorage.setItem("test", JSON.stringify(list));
  }

  turnFakeListtoRealList(list) {
    let i = "" + list.replace(/"/g, '');
    let y = i.replace(/[[\]']+/g,'');
    let b = y.replace(/,/g, ' ');
    let words = b;
    let wordArray = words.split(' ');
    return wordArray
  }

  renderRow() {
    let newList = "" + localStorage.getItem("test");
    let wordArray = this.turnFakeListtoRealList(newList);
    console.log(wordArray);
    let w = wordArray.map(function(item,index){ return item.replace(/_/g, " ")});
    console.log(w);
    let listItems = w.map((l, index) =>
    <li key = {index} id="item"><button id="removeItem" onClick={() => this.removeItem(index)}>{l}</button> </li>
    );
    return listItems
  }

  render() {
    return (
    <div>
      <h2>Here you can make a todo-list to help you remember.</h2>
      <form onKeyPress={this.handleSubmit}>
        <label>
          <input id="textarea" value={this.state.value} onChange={this.handleChange}/>
        </label>
      </form>
      <div id="todoList">
        <ul>
          {this.renderRow()}
        </ul>
      </div>
    </div>
    );
  }
}

export default InputTodo;

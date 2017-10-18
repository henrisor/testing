import React from 'react';

export class Cards extends React.Component{
  render(){
      return (
        <div className="cardContainer">
          <a href={'/Todo'}>
          <h2>Todo list!</h2>
            <img id="todoCard" alt="todo" src="https://openclipart.org/image/2400px/svg_to_png/28096/sheikh-tuhin-To-Do-List.png"/>
          </a>
          <a href={'/Appointments'}>
          <h2>Appointments!</h2>
            <img id="appointmentCard" alt="appointment"  src="http://www.calcuttayellowpages.com/cimage26/109881appoint.png"/>
          </a>
          <a href={'/Notes'}>
          <h2>Notes!</h2>
            <img id="noteCard" alt="notes" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Notepad-117597_640.png"/>
          </a>
        </div>
      )
  };
}
export default Cards;

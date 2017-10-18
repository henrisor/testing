import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const DatePickerS = () => (
  <div>
    <MuiThemeProvider>
        <DatePicker hintText="Dato" />
        <TimePicker hintText="Klokkeslett" format="24hr"/>
    </MuiThemeProvider>
    
  </div>
);


export default DatePickerS;
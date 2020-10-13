import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats'
class App extends Component {
  constructor(){
    super();
    this.state = {
      newDate : '',
      birthday : '1997-08-25',
      //yyyy-mm-dd
      showStats : false
    }
  }

  changeBday(){
    console.log(JSON.stringify(this.state));
    this.setState({
      birthday : this.state.newDate,
      showStats : true
    })

  }

  render() {
    return (
      <div className="App" >
        <h1> AGE TELLER </h1>
      <div>
        <Form inline>
          <h2>Pick your Birthday !!!</h2>
          <FormControl 
          type="date"
          onChange = {event => this.setState({ newDate : event.target.value})}
          ></FormControl>
          {' '}
          <Button
          onClick = { () => this.changeBday()}
          > Submit </Button>
          {
            this.state.showStats 
            ? <div className="fade age-stats"><AgeStats date={this.state.birthday}/></div>
            : <div></div>
          }
          
        </Form>
      </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: '',
      birthday: '2007-12-10',
      showStats: 0,
      withoutClass: false
    }
  }

  retriggerAnimation(cb) {
    this.setState({ withoutClass: true });
    setTimeout(() => {
      this.setState({ withoutClass: false });
      setTimeout(cb, 1000);
    }, 100);
  }

  changeBirthday() {
    // console.log(this.state);
    if (isNaN(new Date(this.state.newDate).getDate())) {
      alert('Please enter a valid date');
    } else {
      if (this.state.showStats >= 1) {
        this.setState({
          showStats: this.state.showStats + 1
        });
        this.retriggerAnimation(() => {
          this.setState({
            birthday: this.state.newDate,
          });
        });
      } else {
        this.setState({
          birthday: this.state.newDate,
          showStats: this.state.showStats + 1
        });
      }
    }
  }

  render() {
    return (
      <div id='App'>
        <h2>Input Your Birthday!</h2>
        <Form inline>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          >
          </FormControl>
          {' '}
          <Button id='submit' onClick={() => this.changeBirthday()}>
            Submit
          </Button>
        </Form>
        {
          this.state.showStats === 1 ?
            <div className="fade age-stats">
              <AgeStats date={this.state.birthday} />
            </div>
          :
            this.state.showStats > 1 ?
              this.state.withoutClass ?
                <div className="age-stats">
                  <AgeStats date={this.state.birthday} />
                </div>
              :
                <div className="age-stats fade-out-in">
                  <AgeStats date={this.state.birthday} />
                </div>
            :
              <div></div>
        }
      </div>
    )
  }
}

export default App;

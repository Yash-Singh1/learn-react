import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { setItem } from '../helpers/localStorage';

class App extends Component {
  constructor() {
    super();

    /* istanbul ignore else */
    if (!localStorage.getItem('gifts')) {
      localStorage.setItem('gifts', '[]');
    }
    this.state = {
      gifts: JSON.parse(localStorage.getItem('gifts'))
    };
  }

  addGift() {
    this.state.gifts.push({
      id:
        this.state.gifts.length === 0
          ? 1
          : this.state.gifts[this.state.gifts.length - 1].id + 1,
      person: '',
      present: ''
    });
    this.setState({ gifts: this.state.gifts });
  }

  modifyGift(id, data) {
    const gifts = this.state.gifts.map((gift) =>
      gift.id === id ? { ...data, id } : gift
    );
    this.setState({ gifts });
  }

  removeGift(id) {
    const gifts = this.state.gifts.filter((gift) => gift.id !== id);
    this.setState({ gifts });
  }

  componentDidUpdate() {
    setItem('gifts', JSON.stringify(this.state.gifts));
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map((gift) => {
            return (
              <Gift
                key={gift.id}
                gift={gift}
                person={gift.person}
                present={gift.present}
                removeGift={(id) => this.removeGift(id)}
                modifyGift={(id, data) => this.modifyGift(id, data)}
              />
            );
          })}
        </div>
        <Button className="btn-add" onClick={() => this.addGift()}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/actions';

export class Wallet extends Component {
  constructor() {
    super();

    this.state = { balance: undefined };
  }

  updateBalance(event) {
    this.setState({ balance: parseInt(event.target.value, 10) });
  }

  deposit() {
    if (isNaN(parseInt(this.state.balance))) {
      return;
    }
    this.props.deposit(this.state.balance);
  }

  withdraw() {
    if (isNaN(parseInt(this.state.balance))) {
      return;
    }
    this.props.withdraw(this.state.balance);
  }

  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input
          className="input-wallet"
          onChange={(event) => this.updateBalance(event)}
        />
        <Button className="btn-deposit" onClick={() => this.deposit()}>
          Deposit
        </Button>
        <Button className="btn-withdraw" onClick={() => this.withdraw()}>
          Withdraw
        </Button>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    balance: state.balance
  };
}

export default connect(mapStateToProps, { deposit, withdraw })(Wallet);

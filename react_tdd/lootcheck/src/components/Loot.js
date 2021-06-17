import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/actions';

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    const { bitcoin } = this.props;

    if (bitcoin.bpi) {
      return this.props.balance / bitcoin.bpi.USD.rate_float;
    } else {
      return '';
    }
  }

  render() {
    return (
      <div>
        <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { fetchBitcoin })(Loot);

import React, { Component } from 'react';
import Header from './Header';

class Jokes extends Component {
  state = { jokes: [], jokesIndex: 0, fadeIn: true };

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then((response) => response.json())
      .then((json) => this.setState({ jokes: json }))
      .catch((error) => alert(error.message));

    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 4000);

    this.titleInterval = setInterval(() => {
      const jokesIndex = (this.state.jokesIndex + 1) % this.state.jokes.length;

      this.setState({ jokesIndex, fadeIn: true });

      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 4000);
    }, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div
        style={{
          marginTop: 30
        }}
      >
        <h2>Highlighted Jokes</h2>
        {this.state.jokes.length === 0 ? null : (
          <p className={this.state.fadeIn ? 'fade-in' : 'fade-out'}>
            {this.state.jokes[this.state.jokesIndex].setup}{' '}
            <em>{this.state.jokes[this.state.jokesIndex].punchline}</em>
          </p>
        )}
      </div>
    );
  }
}

export default Jokes;

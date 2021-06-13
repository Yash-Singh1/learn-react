import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png';

class App extends Component {
  state = {
    displayBio: false
  };

  // readMore() {
  //   this.setState({ displayBio: true });
  // }

  // showLess() {
  //   this.setState({ displayBio: false });
  // }

  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div
        style={{
          marginTop: 30
        }}
      >
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Yash.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Cupertino, and code every day.</p>
            <p>
              My favorite language is JavaScript, and I think Tailwind CSS is
              awesome.
            </p>
            <p>Besides coding, I also love basketball!</p>
            <button onClick={() => this.toggleDisplayBio()}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={() => this.toggleDisplayBio()}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;

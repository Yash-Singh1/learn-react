import React, { Component } from 'react';
import AOS from 'aos';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

class App extends Component {
  state = { artistInfo: {}, artistTracks: [] };

  componentDidMount() {
    AOS.init();
  }

  searchArtist(artist) {
    this.setState({ artistInfo: {} });
    fetch('https://spotify-api-wrapper.appspot.com/artist/' + artist)
      .then((response) => response.json())
      .then((json) => {
        if (json.artists.total === 0) {
          return;
        }
        this.setState({ artistInfo: json.artists.items[0] });
        return fetch(
          'http://spotify-api-wrapper.appspot.com/artist/' +
            json.artists.items[0].id +
            '/top-tracks'
        );
      })
      .then((response) => response.json())
      .then(({ tracks }) => this.setState({ artistTracks: tracks }))
      .catch((reason) => alert(reason));
  }

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <Search searchArtist={(artist) => this.searchArtist(artist)} />
        {Object.keys(this.state.artistInfo).length > 0 ? (
          <div>
            <Artist
              artistInfo={this.state.artistInfo}
              artistTracks={this.state.artistTracks}
            />
            <Tracks tracks={this.state.artistTracks} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

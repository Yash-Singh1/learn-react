import React, { Component } from 'react';

class Search extends Component {
  state = { artistQuery: '' };

  updateArtistQuery(event) {
    this.setState({ artistQuery: event });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  }

  searchArtist() {
    this.props.searchArtist(this.state.artistQuery);
  }

  render() {
    return (
      <div>
        <input
          onChange={(event) => this.updateArtistQuery(event.target.value)}
          placeholder="Search for an artist"
          className="form-control"
          style={{
            width: 'initial',
            display: 'initial'
          }}
          onKeyPress={(event) => this.handleKeyPress(event)}
        />
        <button
          className="btn btn-info"
          style={{
            margin: 10
          }}
          onClick={() => this.searchArtist()}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;

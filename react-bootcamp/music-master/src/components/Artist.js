import React, { Component } from 'react';
import formatNumber from '../helpers/formatNumber';
import 'aos/dist/aos.css';

class Artist extends Component {
  render() {
    let artistGenres = this.props.artistInfo.genres.map((genre) =>
      genre.startsWith('a ') ? genre.slice(2) : genre
    );
    artistGenres =
      artistGenres.length === 1
        ? artistGenres[0]
        : artistGenres.slice(0, -1).join(', ') +
          ', and ' +
          artistGenres[artistGenres.length - 1];
    return (
      <div
        style={{
          margin: 10
        }}
        data-aos="fade-up"
      >
        {this.props.artistInfo.images.length >= 1 ? (
          <img
            alt={this.props.artistInfo.name + ' pic'}
            src={this.props.artistInfo.images[0].url}
            className="pic"
          />
        ) : null}
        <h1>{this.props.artistInfo.name}</h1>
        <p>A music artist on {artistGenres}</p>
        <p>Followers: {formatNumber(this.props.artistInfo.followers.total)}</p>
      </div>
    );
  }
}

export default Artist;

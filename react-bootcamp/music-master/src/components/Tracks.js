import React, { Component } from 'react';

class Tracks extends Component {
  state = { playing: false, audio: null, playingPreviewUrl: null };

  playAudio(previewUrl) {
    const audio = new Audio(previewUrl);
    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true, playingPreviewUrl: previewUrl, audio });
    } else {
      this.state.audio.pause();

      if (this.state.playingPreviewUrl === previewUrl) {
        this.state.audio.pause();
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({ audio, playingPreviewUrl: previewUrl });
      }
    }
  }

  componentWillUnmount() {
    this.state.audio?.pause();
  }

  trackIcon(track) {
    if (!track.preview_url) {
      return <span>N/A</span>;
    }

    if (
      this.state.playing &&
      track.preview_url === this.state.playingPreviewUrl
    ) {
      return <span>| |</span>;
    }
    return <span>&#9654;</span>;
  }

  render() {
    return (
      <div data-aos="fade-up">
        {this.props.tracks.map((track) => {
          return (
            <div key={track.id} className="track">
              {track.album.images.length >= 1 ? (
                <img
                  src={track.album.images[0].url}
                  alt={track.name + ' image'}
                  className="track-image"
                />
              ) : null}
              <p className="track-text">{track.name}</p>
              <p
                className="track-icon"
                onClick={() => this.playAudio(track.preview_url)}
              >
                {this.trackIcon(track)}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tracks;

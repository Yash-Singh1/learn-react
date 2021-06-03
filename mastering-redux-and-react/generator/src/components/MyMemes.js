import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyMemes extends Component {
  render() {
    return (
      <div>
        {this.props.myMemes.map((meme, index) => {
          return (
            <img
              key={index}
              src={meme.data.url}
              alt={meme.name}
              className="my-meme-image"
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myMemes: state.myMemes
  };
}

export default connect(mapStateToProps)(MyMemes);

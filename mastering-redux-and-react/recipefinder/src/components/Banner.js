import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBannerContent } from '../actions';

class Banner extends Component {
  render() {
    return (
      <div>
        {
          !this.props.bannerContent ?
            <div></div>
          :
            <div className='banner'>{this.props.bannerContent} <button className='closeBtn' onClick={() => this.props.setBannerContent(null)}>&times;</button></div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bannerContent: state.bannerContent
  };
}

export default connect(mapStateToProps, { setBannerContent })(Banner)

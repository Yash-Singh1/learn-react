import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
  render() {
    const { socialProfile } = this.props;

    return (
      <span>
        <a href={socialProfile.link}>
          <img
            src={socialProfile.image}
            alt={socialProfile.type}
            style={{
              width: 35,
              height: 35,
              margin: 10
            }}
          />
        </a>
      </span>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect with me!</h2>
        {SOCIAL_PROFILES.map((socialProfile) => {
          return (
            <SocialProfile
              key={socialProfile.id}
              socialProfile={socialProfile}
            />
          );
        })}
      </div>
    );
  }
}

export default SocialProfiles;

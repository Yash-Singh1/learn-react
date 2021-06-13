import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = (props) => {
  const { link, image, type } = props.socialProfile;

  return (
    <span>
      <a href={link}>
        <img
          src={image}
          alt={type}
          style={{
            width: 35,
            height: 35,
            margin: 10
          }}
        />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
  <div>
    <h2>Connect with me!</h2>
    {SOCIAL_PROFILES.map((socialProfile) => {
      return (
        <SocialProfile key={socialProfile.id} socialProfile={socialProfile} />
      );
    })}
  </div>
);

export default SocialProfiles;

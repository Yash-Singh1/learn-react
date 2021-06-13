import React, { Children } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  const style = {
    display: 'inline-block',
    margin: 10
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          right: 40,
          top: 20
        }}
      >
        <h3 style={style}>
          <Link to="/">Home</Link>
        </h3>{' '}
        <h3 style={style}>
          <Link to="/jokes">Jokes</Link>
        </h3>
      </div>
      {children}
    </div>
  );
};

export default Header;

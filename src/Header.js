import React from 'react';
import './index.css';
import { GiantRobot } from './form-logos';

const Header = () => {
  return (
    <div className="header-container split left">
      <div className="header-content">
        <GiantRobot width={'177px'} height={'26px'} />
        <h2 className="header-primary">Welcome</h2>
        <div className="header-secondary">
          Please tell us a little bit about yourself to get started.
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import './index.css';
import { WhiteArrow } from './form-logos';

export const InputField = props => {
  return (
    <div className="field">
      <label className="input-label">{props.label}</label>
      <input type="text" className="input" {...props} />
    </div>
  );
};

export const Button = ({ type, text }) => {
  return (
    <React.Fragment>
      <button type={type} className="button-styles">
        <span className="button-text">{text}</span>
        <WhiteArrow width={'10px'} height={'10px'} />
      </button>
    </React.Fragment>
  );
};

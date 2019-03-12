import React from 'react';
import './index.css';
import { WhiteArrow } from './form-logos';

export const InputField = ({
  label,
  inputname,
  value,
  onChange,
  valid,
  isrequired,
  touched
}) => {
  const modifierId = !valid && isrequired && touched ? 'input-required' : null;
  return (
    <div className="field">
      <label className="input-label">
        {label}
        {!valid && isrequired && touched ? (
          <span className="label-required"> REQUIRED</span>
        ) : null}
      </label>
      <input
        type="text"
        className="input"
        id={modifierId}
        name={inputname}
        valid={valid}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export const Button = ({ type, text, disabled }) => {
  return (
    <React.Fragment>
      <button type={type} className="button-styles" disabled={disabled}>
        <span className="button-text">{text}</span>
        <WhiteArrow width={'10px'} height={'10px'} />
      </button>
    </React.Fragment>
  );
};

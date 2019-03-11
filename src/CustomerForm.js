import React, { Component } from 'react';
import { Button } from './form.utils';
import './index.css';

export default class CustomerForm extends Component {
  state = {
    firstName: {
      value: '',
      isValid: false,
      isRequired: true
    },
    lastName: {
      value: '',
      isValid: false,
      isRequired: true
    },
    addressLineOne: {
      value: '',
      isValid: false,
      isRequired: true
    },
    addressLineTwo: {
      value: '',
      isValid: false,
      isRequired: false
    }
  };
  validate = (value, rules) => {
    let isValid = true;
    if (rules) {
      isValid = value.trim() !== '';
    }
    return isValid;
  };

  submit = e => {
    e.preventDefault();
    const formData = {};
    for (let formElementName in this.state) {
      formData[formElementName] = this.state[formElementName].value;
    }
    this.props.onSubmit(formData);
    alert(
      'Full Name: ' +
        formData.firstName +
        ' ' +
        formData.lastName +
        '\n' +
        'Address: ' +
        formData.addressLineOne +
        '\n' +
        formData.addressLineTwo
    );
  };

  onChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    const updatedControls = {
      ...this.state
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };

    updatedFormElement.value = value;
    //TODO:: Validation
    // updatedFormElement.isValid = this.validate(
    //   updatedFormElement.value,
    //   updatedFormElement.isRequired
    // );
    updatedControls[name] = updatedFormElement;

    this.setState({ [name]: { value } });
  };

  render() {
    const required =
      this.state.isValid && this.state.isRequired ? (
        <span className="required-label">REQUIRED</span>
      ) : null;
    return (
      <div className="form-container split right">
        <form className="centered" onSubmit={this.submit}>
          <div>
            <label className="input-label">First Name</label>
            {required}
            <input
              type="text"
              className="input"
              name="firstName"
              value={this.state.firstName.value}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label className="input-label">Last Name </label>
            {required}
            <input
              type="text"
              className="input"
              name="lastName"
              value={this.state.lastName.value}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label className="input-label">Address </label>
            {required}
            <input
              className="input"
              type="text"
              name="addressLineOne"
              value={this.state.addressLineOne.value}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label className="input-label">Address 2 (optional) </label>
            <input
              className="input"
              type="text"
              name="addressLineTwo"
              value={this.state.addressLineTwo.value}
              onChange={this.onChangeHandler}
            />
          </div>
          <Button type={'submit'} text={'Next'} />
        </form>
      </div>
    );
  }
}

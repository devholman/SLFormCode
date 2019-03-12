import React, { Component } from 'react';
import { Button, InputField } from './form.components';
import './index.css';

export default class CustomerForm extends Component {
  state = {
    formIsValid: false,
    formControls: {
      firstName: {
        value: '',
        isValid: false,
        touched: false,
        isRequired: true
      },
      lastName: {
        value: '',
        isValid: false,
        touched: false,
        isRequired: true
      },
      addressLineOne: {
        value: '',
        isValid: false,
        touched: false,
        isRequired: true
      },
      addressLineTwo: {
        value: '',
        isValid: false,
        touched: false,
        isRequired: false
      }
    }
  };
  //validates if required form field is empty
  validate = (value, rules) => {
    let isValid = true;
    if (rules) {
      isValid = value.trim() !== '';
    }
    return isValid;
  };

  //submits form data into an alert dialog window

  submit = e => {
    e.preventDefault();
    const formData = {};
    for (let formElementName in this.state.formControls) {
      formData[formElementName] = this.state.formControls[
        formElementName
      ].value;
    }
    //update parent component
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
  //on field change, validates field and updates form values
  onChangeHandler = e => {
    const value = e.target.value;
    const name = e.target.name;
    //create copy of state
    const updatedControls = {
      ...this.state.formControls
    };
    //create copy of form element
    const updatedFormElement = {
      ...updatedControls[name]
    };
    //update copy of property values
    updatedFormElement.value = value;
    updatedFormElement.touched = true;

    //validate changed form element
    updatedFormElement.isValid = this.validate(
      updatedFormElement.value,
      updatedFormElement.isRequired
    );

    updatedControls[name] = updatedFormElement;
    let formIsValid = true;
    for (let formElementName in updatedControls) {
      formIsValid = updatedControls[formElementName].isValid && formIsValid;
    }
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  };

  render() {
    const {
      firstName,
      lastName,
      addressLineOne,
      addressLineTwo
    } = this.state.formControls;
    return (
      <div className="form-container split right">
        <form className="centered" onSubmit={this.submit}>
          <InputField
            label={'FIRST NAME'}
            inputname={'firstName'}
            value={firstName.value}
            onChange={this.onChangeHandler}
            isrequired={firstName.isRequired}
            touched={firstName.touched}
            valid={firstName.isValid}
          />
          <InputField
            label={'LAST NAME'}
            inputname={'lastName'}
            value={lastName.value}
            onChange={this.onChangeHandler}
            isrequired={lastName.isRequired}
            touched={lastName.touched}
            valid={lastName.isValid}
          />
          <InputField
            label={'ADDRESS'}
            inputname={'addressLineOne'}
            value={addressLineOne.value}
            onChange={this.onChangeHandler}
            isrequired={addressLineOne.isRequired}
            touched={addressLineOne.touched}
            valid={addressLineOne.isValid}
          />
          <InputField
            label={'ADDRESS 2 (OPTIONAL)'}
            inputname={'addressLineTwo'}
            value={addressLineTwo.value}
            onChange={this.onChangeHandler}
            isrequired={addressLineTwo.isRequired}
            touched={addressLineTwo.touched}
            valid={addressLineTwo.isValid}
          />
          <Button
            type={'submit'}
            text={'Next'}
            disabled={!this.state.formIsValid}
          />
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Header from './Header';
import CustomerForm from './CustomerForm';
import './index.css';

class App extends Component {
  onFormSubmit(form) {
    console.log(form);
  }
  render() {
    return (
      <div>
        <Header />
        <CustomerForm onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;

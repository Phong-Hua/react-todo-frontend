import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';

class App  extends Component {

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default connect()(App);

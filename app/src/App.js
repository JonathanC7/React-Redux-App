import React from 'react';
import './App.css';

import ImageGetter from './components/ImageGetter';
import { connect } from 'react-redux';

const App = props => {

  return (
    <div className="App">
      <h1>Space X Photos</h1>
      <ImageGetter />
    </div>
  );
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(
  mapStateToProps,
  {
  })(App);


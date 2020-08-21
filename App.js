import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Error from './components/error';
import Map from './components/map';

const App = (props) => {
  const { error } = props;
  console.log(error);
  return <View>{error.length ? <Error /> : <Map />}</View>;
};

const mapStateToProps = (state) => {
  const { error } = state;
  return {
    error,
  };
};

export default connect(mapStateToProps, null)(App);

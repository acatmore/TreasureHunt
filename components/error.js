import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { windowHeight } from '../utils/device';

const Error = (props) => {
  const { error } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Error: {error}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: windowHeight,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});
const mapStateToProps = (state) => {
  const { error } = state;
  return {
    error,
  };
};

export default connect(mapStateToProps, null)(Error);

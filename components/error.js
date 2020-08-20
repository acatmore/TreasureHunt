import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const Error = (props) => {
  const { error } = props;
  return (
    <View>
      <Text>Error: {error}</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { error } = state;
  return {
    error,
  };
};

export default connect(mapStateToProps, null)(Error);

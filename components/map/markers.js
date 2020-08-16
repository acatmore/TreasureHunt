/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from './mapActions';
import { Marker } from 'react-native-maps';

const Markers = (props) => {
  const { items, fetchItems } = props;
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  return (
    <>
      {items && items.map((item) => (
        <Marker
          key={item.id}
          coordinate={{ latitude: item.latitude, longitude: item.longitude }}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  const { items, isFetching } = state.items;
  return {
    items,
    isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchItems }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Markers);

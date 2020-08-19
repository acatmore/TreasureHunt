/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from './mapActions';
import { checkTreasure } from './markerActions';
import { Marker } from 'react-native-maps';

const Markers = (props) => {
  const { items, checkTreasure, fetchItems } = props;
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  return (
    <>
      {items && items.map((item) => (
        <Marker
          key={item.id}
          coordinate={{ latitude: item.latitude, longitude: item.longitude }}
          onPress={() => checkTreasure(item)}
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
  return bindActionCreators({ fetchItems, checkTreasure }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Markers);

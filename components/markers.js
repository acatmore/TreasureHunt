import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkTreasure } from '../store/actions/marker/markerActions';
import { ActivityIndicator, View } from 'react-native';
import { Marker } from 'react-native-maps';

const Markers = (props) => {
  const { items, checkTreasure, isChecking } = props;

  return (
    <>
      {items &&
        items.map((item) => (
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
  const { items, isChecking } = state;
  return {
    items,
    isChecking,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ checkTreasure }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Markers);

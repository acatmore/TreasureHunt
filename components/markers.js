import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkTreasure } from '../store/marker/actions';

import { Marker } from 'react-native-maps';

const Markers = (props) => {
  const { items, checkTreasure } = props;

  return (
    <>
      {items &&
        items.map((item) => (
          <Marker
            key={item.id} //unique enough for this use case, otherwise needs changing
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            onPress={() => checkTreasure(item)}
          />
        ))}
    </>
  );
};

const mapStateToProps = (state) => {
  const { items, checkTreasure } = state;
  return {
    items,
    checkTreasure,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ checkTreasure }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Markers);

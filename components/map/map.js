/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Markers from './markers';
import averageCoord from '../../utils/averageCoord';

const Map = (props) => {
  // const { items } = props;
  // console.log(props.items[0].longitude)
  const windowHeight = Dimensions.get('window').height;
  const _map = useRef(null);
  // let center
  // if (props.items.length) {
  //   center = averageCoord(props.items)
  //   console.log('lat', center[0], props.items[0].latitude, 'long', center[1], props.items[0].longitude);
  // }

  const [region, setRegion] = useState({
    latitude: 47.6492166666667, longitude: -122.351333333333,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <View style={{
      position: 'relative',
      height: windowHeight,
    }}>
      <MapView
        style={styles.mainView}
        ref={_map}
        provider={null}
        initialRegion={region}
        loadingEnabled={true}
        onRegionChangeComplete={region => setRegion(region)}
      >
        <Markers />
      </MapView></View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
});

const mapStateToProps = (state) => {
  const { items, isFetching } = state.items;
  return {
    items,
    isFetching,
  };
};

export default connect(mapStateToProps, null)(Map);

/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const windowHeight = Dimensions.get('window').height;
import Markers from './markers';

const Map = (props) => {
  const _map = useRef(null);
  const [region, setRegion] = useState({
    latitude: 47.6492166666667, longitude: -122.351333333333,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
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

export default Map;

/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../store/map/actions';
import Markers from './markers';
import Error from './error';
import { windowHeight } from '../utils/device';

const Map = (props) => {
  const { items, fetchItems, error, } = props;
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  const _map = useRef(null);

  return (
    <View style={items.length ? styles.container : styles.loadingView}>
      {items.length ? (
        <MapView
          ref={_map}
          style={styles.mainView}
          provider={null}
          loadingEnabled={true}
          onMapReady={() => _map.current.fitToCoordinates(items, {
            edgePadding: {
              top: 50,
              right: 50,
              bottom: 50,
              left: 50,
            },
            animated: false,
          })}>
          {error ? <Error /> : <Markers />}
        </MapView>
      ) : (
          <ActivityIndicator />
        )
      }
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: windowHeight,
  },
  mainView: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  loadingView: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { items, error, region } = state;
  return {
    items,
    error,
    region,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchItems }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

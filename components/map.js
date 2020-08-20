import React, { useState, useRef, useEffect } from 'react';
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../store/actions/map/mapActions';
import Markers from './markers';
import regionCoord from '../utils/regionCoord';
import { windowHeight } from '../utils/device';

const Map = (props) => {
  const { items, fetchItems, isFetching } = props;
  const _map = useRef(null);
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  console.log(items);
  const [region, setRegion] = useState({});
  const dataLoaded = 'latitude' in region;
  useEffect(() => {
    if (items && items.length && !dataLoaded) {
      const data = regionCoord(items);
      setRegion({
        latitude: data[0],
        longitude: data[1],
        latitudeDelta: data[2],
        longitudeDelta: data[3],
      });
    }
  }, [items, dataLoaded]);

  return (
    <View style={dataLoaded ? styles.container : styles.loadingView}>
      {dataLoaded && (
        <MapView
          style={styles.mainView}
          ref={_map}
          provider={null}
          loadingEnabled={true}
          initialRegion={region}
          mapPadding={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
          <Markers />
        </MapView>
      )}
      {/* {!dataLoaded && <ActivityIndicator />} */}
    </View>
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
  const { items, isFetching } = state;
  return {
    items,
    isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchItems }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

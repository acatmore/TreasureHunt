import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Map from './components/map';

const App = (props) => {
  return (
    <SafeAreaView styles={styles.container}>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

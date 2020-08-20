import React from 'react';
import { Alert, Platform, Vibration } from 'react-native';

const createAlert = (treasure) => {
  const ONE_SECOND_IN_MS = 1000;
  treasure && Vibration.vibrate(10 * ONE_SECOND_IN_MS);
  Alert.alert(treasure ? 'You found treasure!' : 'No treasure here.');
};

export default createAlert;

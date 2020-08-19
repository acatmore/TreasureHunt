/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, Platform, Vibration } from 'react-native';

const createAlert = (treasure) => {
  Alert.alert(
    treasure ? 'You found treasure!' : 'No treasure here.',
  );
};

export default createAlert;

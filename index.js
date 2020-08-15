/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './store';
import App from './App';
import { name as appName } from './app.json';

const Root = () => {
  const store = createStore();
  return (<Provider store={store}><App /></Provider>)
};

AppRegistry.registerComponent(appName, () => Root);

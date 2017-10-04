/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';


import App from './app/App'
/**
 * Main Screen for IOS lands here, but we want both IOS and Android to show the same information.
 * This will return the "App"
 */
export default class reactNativeIntro extends Component {
  render() {
    return (
          <App />
    );
  }
}

AppRegistry.registerComponent('reactNativeIntro', () => reactNativeIntro);

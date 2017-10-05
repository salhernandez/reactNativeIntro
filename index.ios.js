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

import { Provider } from 'react-redux/'

import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './app/reducers/index'
import {persistStore, autoRehydrate} from 'redux-persist'
var {AsyncStorage} = require('react-native');

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = autoRehydrate()(createStoreWithMiddleware)(rootReducer);
// store.subscribe(() =>{
//     console.log("store changed", store.getState())
// })

/**
 * Main Screen for IOS lands here, but we want both IOS and Android to show the same information.
 * This will return the "App"
 */
export default class reactNativeIntro extends Component {
    render() {
        return (
            <Provider store={store}>
              <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('reactNativeIntro', () => reactNativeIntro);

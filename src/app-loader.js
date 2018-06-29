/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Root from './screens/root';
import { Provider } from 'react-redux';
import { configureStore } from './stores/customer-store';

const { store } = configureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

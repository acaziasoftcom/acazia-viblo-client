/**
 * @flow
 * Redux Store configuration for ononpay.
 * Using redux-persist v5.
 * Feb 9 2018: Updated for react-navigation 1.0.3
 */

'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';
import { rootReducer } from '../reducers/root-reducer';


// redux-persist v5 configuration:
// Persistor configuration, default is AsyncStorage;
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'config'],
  blacklist: ['navState', 'form']
};

// Reducer, persisted.
const reducers = persistCombineReducers(persistConfig, rootReducer);

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'flash',
  state => {
    return state.navState;
  }
);

export const addListener = createReduxBoundAddListener('flash');

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(navigationMiddleware))
  );
  return { store };
}

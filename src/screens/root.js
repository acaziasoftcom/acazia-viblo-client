import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import {
  DrawerLayoutAndroid,
  Platform,
  View,
  Dimensions,
  StyleSheet,
  StatusBar
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout-polyfill';
import AppNavigator from '../navigations/app-navigator';;
import { CustomDrawer } from '../components/custom-drawer-content';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <DrawerLayout
          ref={drawerLayout => {
            this.drawer = drawerLayout;
          }}
          renderNavigationView={() => <CustomDrawer />}
          drawerWidth={0.7 * Dimensions.get('window').width}
          drawerBackgroundColor={'white'}
          drawerPosition={
            Platform.OS === 'android'
              ? DrawerLayoutAndroid.positions.Left
              : 'left'
          }
          onDrawerClose={() => (this.drawerIsOpen = false)}
          onDrawerOpen={() => (this.drawerIsOpen = true)}
          statusBarBackgroundColor={'#fff'}
          //drawerLockMode={this.getDrawerLockMode()}
          useNativeAnimations
        >
         <StatusBar backgroundColor="#E4E4F0" barStyle={'dark-content'} />
          <AppNavigator/>
        </DrawerLayout>
      </Fragment>
    );
  }
}

export default Root;

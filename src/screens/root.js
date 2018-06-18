import React, { Component, Fragment } from 'react';
import {
  DrawerLayoutAndroid,
  Platform,
  DeviceEventEmitter,
  Dimensions,
  StyleSheet,
  StatusBar
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout-polyfill';
import AppNavigator from '../navigations/app-navigator';
import { CustomDrawer } from '../components/custom-drawer-content';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    DeviceEventEmitter.addListener(
      'DRAWER_TOGGLE',
      isOpen => (isOpen ? this.drawer.openDrawer() : this.drawer.closeDrawer())
    );
    DeviceEventEmitter.addListener('DRAWER_CLOSE', () =>
      this.drawer.closeDrawer()
    );
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
          <AppNavigator />
        </DrawerLayout>
      </Fragment>
    );
  }
}

export default Root;

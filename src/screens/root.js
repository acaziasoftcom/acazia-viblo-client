import React, { Component, Fragment } from 'react';
import {
  DrawerLayoutAndroid,
  Platform,
  DeviceEventEmitter,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import DrawerLayout from 'react-native-drawer-layout-polyfill';
import { AppWithNavigationState } from '../navigations/app-navigator';
import CustomDrawer from '../components/custom-drawer-content';
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
          <AppWithNavigationState />
        </DrawerLayout>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { navState } = state;
  return {
    navState
  };
};

export default connect(mapStateToProps)(Root);

import React, { Component, Fragment } from 'react';
import { StyleSheet, StatusBar, DeviceEventEmitter } from 'react-native';
import { ButtonIcon } from '../../components/common/button-icon';
import ScrollableTabView, {
  ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import { Icon } from 'react-native-elements';
import ProfileService from '../../components/profiles/profiles';

export default class Profiles extends Component {
  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation;
    return {
      headerStyle: styles.styleHeader,
      headerTintColor: '#5387c6',
      headerTitle: '',
      headerLeft: (
        <ButtonIcon
          extraElement={
            <Icon
              name="menu"
              type="material-community"
              color="#fff"
              style={{ paddingLeft: 5 }}
            />
          }
          onPress={() => {
            DeviceEventEmitter.emit('DRAWER_TOGGLE', true);
          }}
          title={'My Contents'}
        />
      ),
      headerRight: (
        <ButtonIcon
          onPress={() => {
            navigation.push('SearchScreen');
          }}
          extraElement={
            <Icon name="magnify" type="material-community" color="#fff" />
          }
        />
      )
    };
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor="#5387c6" barStyle="light-content" />
        <ScrollableTabView
          initialPage={0}
          // onChangeTab={({ i }) => this.onChangeTab(i)}
          prerenderingSiblingsNumber={0}
          tabBarTextStyle={{ color: '#fff' }}
          tabBarBackgroundColor={'#5387c6'}
          tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
          ref={tabView => {
            this.tabView = tabView;
          }}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <ProfileService {...this.props} service={1} tabLabel="My posts" />
          <ProfileService {...this.props} service={2} tabLabel="My questions" />
          <ProfileService {...this.props} service={3} tabLabel="My Series" />
          <ProfileService
            {...this.props}
            service={4}
            tabLabel="Following users"
          />
          <ProfileService
            {...this.props}
            service={5}
            tabLabel="Following tags"
          />
        </ScrollableTabView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  styleHeader: {
    backgroundColor: '#5387c6',
    shadowColor: '#fff',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    },
    elevation: 0
  }
});

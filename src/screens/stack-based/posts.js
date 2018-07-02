import React, { Component, Fragment } from 'react';
import { StyleSheet, StatusBar, DeviceEventEmitter } from 'react-native';
import { ButtonIcon } from '../../components/common/button-icon';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Icon } from 'react-native-elements';
import PostsView from '../../components/posts/post-view';
import { Colors } from '../../common/colors';
export default class Post extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: styles.styleHeader,
      headerTintColor: Colors.STRONG_CYAN,
      headerTitle: '',
      headerLeft: (
        <ButtonIcon
          extraElement={
            <Icon
              name="menu"
              type="material-community"
              color={Colors.WHITE}
              style={{ paddingLeft: 5 }}
            />
          }
          onPress={() => {
            DeviceEventEmitter.emit('DRAWER_TOGGLE', true);
          }}
          title={'Home'}
        />
      ),
      headerRight: (
        <ButtonIcon
          onPress={() => {
            navigation.push('SearchScreen');
          }}
          extraElement={
            <Icon
              name="magnify"
              type="material-community"
              color={Colors.WHITE}
            />
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
        <StatusBar
          backgroundColor={Colors.STRONG_CYAN}
          barStyle="light-content"
        />
        <ScrollableTabView
          initialPage={0}
          prerenderingSiblingsNumber={0}
          tabBarTextStyle={{ color: Colors.WHITE }}
          tabBarBackgroundColor={Colors.STRONG_CYAN}
          tabBarUnderlineStyle={{ backgroundColor: Colors.WHITE }}
          ref={tabView => {
            this.tabView = tabView;
          }}
        >
          <PostsView {...this.props} chooseData={'newest'} tabLabel="Newest" />
          <PostsView
            {...this.props}
            chooseData={'editors-choice'}
            tabLabel="Editors choice"
          />
          <PostsView
            {...this.props}
            chooseData={'trending'}
            tabLabel="Trending"
          />
        </ScrollableTabView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  styleHeader: {
    backgroundColor: Colors.STRONG_CYAN,
    shadowColor: Colors.WHITE,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    },
    elevation: 0
  }
});

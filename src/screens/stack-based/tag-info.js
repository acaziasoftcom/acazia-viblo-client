import React, { Component, Fragment } from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import PostsView from '../../components/posts/post-view';
import { ButtonFollow } from '../../components/common/button-follow';
import { Header } from '../../components/header/header-layout';
import { ButtonBack } from '../../components/header/button-back';

export default class TagInfo extends Component {
  static navigationOptions = () => {
    return {
      header: null,
      headerMode: 'screen'
    };
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor="#5387c6" barStyle="light-content" />
        <Header
          noMarginTop={Platform.OS === 'android'}
          title={
            <View style={styles.avatarHeader}>
              <Text style={{ fontSize: 17, color: '#fff' }}>{name}</Text>
            </View>
          }
          style={{ width: width, marginTop: Platform.OS === 'ios' ? 20 : 0 }}
          headerLeft={
            <ButtonBack
              onPress={() => {
                this.props.navigation.goBack();
              }}
              color={'#fff'}
            />
          }
          headerRight={<ButtonFollow onPress={() => {}} />}
        />
        <ScrollableTabView
          initialPage={0}
          prerenderingSiblingsNumber={0}
          tabBarTextStyle={{ color: '#fff' }}
          tabBarBackgroundColor={'#5387c6'}
          tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
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

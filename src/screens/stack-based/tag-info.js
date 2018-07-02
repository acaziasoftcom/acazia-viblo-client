import React, { Component, Fragment } from 'react';
import { StatusBar, View, Text } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import PostsView from '../../components/posts/post-view';
import { ButtonFollow } from '../../components/common/button-follow';
import { Header } from '../../components/header/header-layout';
import { ButtonBack } from '../../components/header/button-back';
import { Colors } from '../../common/colors';

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
        <StatusBar
          backgroundColor={Colors.STRONG_CYAN}
          barStyle="light-content"
        />
        <Header
          noMarginTop={Platform.OS === 'android'}
          title={
            <View style={styles.avatarHeader}>
              <Text style={{ fontSize: 17, color: Colors.WHITE }}>{name}</Text>
            </View>
          }
          style={{ width: width, marginTop: Platform.OS === 'ios' ? 20 : 0 }}
          headerLeft={
            <ButtonBack
              onPress={() => {
                this.props.navigation.goBack();
              }}
              color={Colors.WHITE}
            />
          }
          headerRight={<ButtonFollow onPress={() => {}} />}
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

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import PostItem from '../../components/posts/post-item';
import { ButtonIcon } from '../../components/common/button-icon';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Icon } from 'react-native-elements';
const list = [1, 1, 1, 1, 1, 1];
const Sence = ({ data }) => {
  return (
    <ScrollView style={styles.containerList}>
      {data.map(value => {
        return <PostItem key={Math.random()} value={value} />;
      })}
    </ScrollView>
  );
};
export default class Post extends Component {
  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation;
    return {
      headerStyle: styles.styleHeader,
      headerTintColor: '#777BF3',
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
          title={'Home'}
        />
      ),
      headerRight: (
        <ButtonIcon
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
      <ScrollableTabView
        tabBarTextStyle={{ color: '#fff' }}
        tabBarBackgroundColor={'#777BF3'}
        tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
        ref={tabView => {
          this.tabView = tabView;
        }}
      >
        <Sence data={list} tabLabel="Newest" />
        <Sence data={list} tabLabel="Editors choice" />
        <Sence data={list} tabLabel="Trending" />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: '#F1F2EC',
    marginTop: 3
  },
  styleHeader: {
    backgroundColor: '#777BF3',
    shadowColor: '#fff',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    },
    elevation: 0
  }
});

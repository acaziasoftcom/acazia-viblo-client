import React, { Component } from 'react';;
import { View, Text, ScrollView, Dimensions } from 'react-native';
import PostItem from '../../components/posts/post-item';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
const list = [1, 1, 1, 1, 1, 1];
const Sence = () => {
  return (
    <ScrollView style={{ backgroundColor: '#F1F2EC', marginTop: 3 }}>
      {list.map(value => {
        return <PostItem key={Math.random()} />;
      })}
    </ScrollView>
  );
};

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width
};
export default class Post extends React.Component {
  // static navigationOptions = () => ({
  //     header: null
  // });
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Newest' },
        { key: 'second', title: 'Editors choice' },
        { key: 'thirty', title: 'Trending' }
      ]
    };
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#fff' }}
      labelStyle={{ fontSize: 13, color: '#fff' }}
    />
  );

  _renderScene = SceneMap({
    first: Sence,
    second: Sence,
    thirty: Sence
  });
  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PostItem from './post-item';
import { apiPosts } from '../../common/api/api-posts';
export default class PostsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    apiPosts
      .get(this.props.chooseData, 1)
      .then(r => {
        console.log(r);
        this.setState({ data: r.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <ScrollView style={styles.containerList}>
        {this.state.data.map(value => {
          return <PostItem key={Math.random()} value={value} {...this.props} />;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: '#F1F2EC',
    marginTop: 3
  }
});

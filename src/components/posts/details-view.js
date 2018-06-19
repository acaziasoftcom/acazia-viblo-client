import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { apiPosts } from '../../common/api/api-posts';
const { width } = Dimensions.get('window');
export default class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    const { slug } = this.props.navigation.state.params.value;
    console.log(this.props.navigation.state.params.value);
    apiPosts
      .getPost(slug)
      .then(r => {
        console.log(r);
        this.setState({ data: r.post.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (this.state.data) {
      var { contents, seo, tags, title } = this.state.data;
    }
    return (
      <ScrollView
        contentContainerStyle={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 30,
          paddingLeft: 10,
          paddingBottom: 20,
          paddingRight: 5,
          backgroundColor: '#fff'
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '500' }}>
          {this.state.data !== null ? title : ''}
        </Text>
        <Text style={{ fontSize: 15 }}>
          {this.state.data !== null ? contents : ''}
        </Text>
      </ScrollView>
    );
  }
}

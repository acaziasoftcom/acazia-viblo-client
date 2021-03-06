import React, { Component } from 'react';
import PostItem from './post-item';
import { apiPosts } from '../../common/api/api-posts';
import ShowListData from '../common/show-list-data';
import { ActivityIndicator } from 'react-native';
import { apiTags } from '../../common/api/api-tags';

export default class PostsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.page = 1;
    this.loading = true;
    this.getData(1);
  }
  getData(page) {
    const { isTag, slug } = this.props;
    if (isTag) {
      return apiTags
        .associatedResource('posts', slug, { litmit: 10, page: page })
        .then(r => {
          console.log(r);
          this.setState({ data: [...this.state.data, ...r.data] });
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    }
    apiPosts
      .get(this.props.chooseData, page)
      .then(r => {
        this.setState({ data: [...this.state.data, ...r.data] });
        this.loading = false;
      })
      .catch(err => {
        this.loading = false;
      });
  }

  onEndReached = () => {
    console.log('sss: ', this.page);
    this.loading = true;
    this.getData(this.page);
    this.page++;
  };

  render() {
    return (
      <ShowListData
        {...this.props}
        data={this.state.data}
        component={<PostItem />}
        ListFooterComponent={this.loading && <ActivityIndicator />}
        onEndReached={() => this.onEndReached()}
      />
    );
  }
}

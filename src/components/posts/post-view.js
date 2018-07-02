import React, { Component, Fragment } from 'react';
import PostItem from './post-item';
import { apiPosts } from '../../common/api/api-posts';
import ShowListData from '../common/show-list-data';
import { ActivityIndicator } from 'react-native';

export default class PostsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.page = 1;
    this.loading = true;
    this.getData(1);
    this._refresh = this._refresh.bind(this);
  }
  getData(page) {
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

  _refresh() {
    return new Promise(resolve => {
      console.log(this.props);
      setTimeout(() => {
        this.getData(1);
        resolve();
      }, 1000);
    });
  }
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

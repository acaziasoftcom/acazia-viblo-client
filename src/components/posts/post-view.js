import React, { Component } from 'react';
import PostItem from './post-item';
import { apiPosts } from '../../common/api/api-posts';
import ShowListData from '../common/show-list-data';
export default class PostsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    apiPosts
      .get(this.props.chooseData, 1)
      .then(r => {
        this.setState({ data: r.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <ShowListData
        {...this.props}
        data={this.state.data}
        component={<PostItem />}
      />
    );
  }
}

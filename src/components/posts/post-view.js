import React, { Component } from 'react';
import PostItem from './post-item';
import { apiPosts } from '../../common/api/api-posts';
import ShowListData from '../common/show-list-data';
import PTRView from 'react-native-pull-to-refresh';

export default class PostsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.page = 1;
    this.getData(1);
    this._refresh = this._refresh.bind(this);
  }
  getData(page) {
    apiPosts
      .get(this.props.chooseData, page)
      .then(r => {
        let dataPv = this.state.data;
        let dataNew = dataPv.concat(r.data);
        this.setState({ data: dataNew });
      })
      .catch(err => console.log(err));
  }

  onEndReached = () => {
    //console.log('sss: ', this.page);
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
    console.log(this.state.data.length);
    return (
      <PTRView onRefresh={this._refresh}>
        <ShowListData
          {...this.props}
          data={this.state.data}
          component={<PostItem />}
          onEndReached={this.onEndReached}
        />
      </PTRView>
    );
  }
}

import React, { Component } from 'react';
import PostItem from '../posts/post-item';
import { apiSeries } from '../../common/api/api-series';
import ShowListData from '../common/show-list-data';
import { ActivityIndicator } from 'react-native';
export default class SerieView extends Component {
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
    apiSeries
      .getSeriesFeed({ page: page, limit: 10 })
      .then(result => {
        console.log('result', result);
        this.setState({
          data: [...this.state.data, ...result.data]
        });
        this.loading = false;
      })
      .catch(e => {
        this.loading = false;
      });
  }

  onEndReached = () => {
    this.loading = true;
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

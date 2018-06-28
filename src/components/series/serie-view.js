import React, { Component } from 'react';
import PostItem from '../posts/post-item';
import { apiSeries } from '../../common/api/api-series';
import ShowListData from '../common/show-list-data';
export default class SerieView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    apiSeries
      .getSeriesFeed({ page: 1, limit: 10 })
      .then(result => {
        console.log('result', result);
        this.setState({
          data: result.data
        });
      })
      .catch(e => console.log(e));
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

import React, { Component } from 'react';
import QuestionItem from '../questions/question-item';
import { apiQuestions } from '../../common/api/api-questions';
import ShowListData from '../common/show-list-data';
import PostItem from '../posts/post-item';
import { apiPosts } from '../../common/api/api-posts';
import { apiSeries } from '../../common/api/api-series';
import { followingData } from '../../common/static-data';
import { Avatar } from '../common/avatar';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default class ProfileService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getData();
  }

  async getData() {
    const { service } = this.props;
    let data = null;
    if (service === 2) {
      data = await apiQuestions.getQuestionsFeed('newest', {
        page: 1,
        limit: 20
      });
    } else if (service === 1) {
      data = await apiPosts.get('newest', 1);
    } else if (service === 3) {
      data = await apiSeries.getSeriesFeed({ page: 1, limit: 20 });
    } else if (service === 4) {
      data = followingData;
      return;
    } else if (service === 5) {
      data = await apiPosts.get('newest', 1);
    }
    this.setState({ data: data.data });
  }

  getComponent() {
    const { service } = this.props;
    if (service === 2) {
      return <QuestionItem />;
    } else if (service === 1) {
      return <PostItem />;
    } else if (service === 3) {
      return <PostItem isSeries />;
    } else if (service === 4 || service === 5) {
      return (
        <Avatar
          style={{
            flex: 1,
            width: width,
            paddingTop: 8,
            paddingBottom: 8,
            borderBottomColor: '#D7D8E6',
            borderBottomWidth: 0.5
          }}
          styleName={{ color: 'black', fontSize: 17 }}
          styleUserName={{ color: 'black', fontSize: 14 }}
          styleImage={{
            height: 50,
            width: 50,
            borderRadius: 25
          }}
        />
      );
    } else {
      return null;
    }
  }
  render() {
    const { service } = this.props;
    return (
      <ShowListData
        {...this.props}
        data={
          service !== 4 && service !== 5 ? this.state.data : followingData.data
        }
        component={this.getComponent()}
      />
    );
  }
}

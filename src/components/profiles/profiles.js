import React, { Component } from 'react';
import QuestionItem from '../questions/question-item';
import { apiQuestions } from '../../common/api/api-questions';
import ShowListData from '../common/show-list-data';
import PostItem from '../posts/post-item';
import { apiPosts } from '../../common/api/api-posts';
import { apiSeries } from '../../common/api/api-series';
import { followingData } from '../../common/static-data';
import { apiTags } from '../../common/api/api-tags';
import { Avatar } from '../common/avatar';
import { Dimensions, ActivityIndicator } from 'react-native';
const { width } = Dimensions.get('window');
import { Colors } from '../../common/colors';

export default class ProfileService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getData();
    this.page = 1;
    this.loading = true;
  }

  async getData() {
    const { service, isTag, slug } = this.props;
    let data = null;
    if (service === 2) {
      data = await apiQuestions.getQuestionsFeed('newest', {
        page: this.page,
        limit: 20
      });
    } else if (service === 1) {
      data = await apiPosts.get('newest', this.page);
    } else if (service === 3) {
      data = await apiSeries.getSeriesFeed({ page: this.page, limit: 20 });
    } else if (service === 4) {
      if (isTag) {
        data = await apiTags.associatedResource('followers', slug, {
          litmit: 10,
          page: this.page
        });
        console.log(data);
      } else {
        data = followingData;
      }
    } else if (service === 5) {
      console.log('1');
      data = followingData;
    }

    this.setState({ data: [...this.state.data, ...data.data] });
    console.log('1: ', this.state.data);
    this.loading = false;
    this.page++;
  }

  onEndReached = () => {
    console.log('sss: ', this.page);
    this.loading = true;
    this.getData();
    this.page++;
  };

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
          styleName={{ color: Colors.BLACK, fontSize: 17 }}
          styleUserName={{ color: Colors.BLACK, fontSize: 14 }}
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
    const { service, isTag } = this.props;
    let data = [];
    if (service !== 4 && service !== 5) {
      data = this.state.data;
    } else {
      if (isTag) {
        data = this.state.data;
      } else {
        data = followingData.data;
      }
    }
    return (
      <ShowListData
        {...this.props}
        data={data}
        component={this.getComponent()}
        ListFooterComponent={this.loading && <ActivityIndicator />}
        onEndReached={() => this.onEndReached()}
        onEndReachedThreshold={0}
      />
    );
  }
}

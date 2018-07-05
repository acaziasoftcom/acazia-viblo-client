import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import QuesionItem from './question-item';
import ShowListData from '../../components/common/show-list-data';
import { apiQuestions } from '../../common/api/api-questions';
import { apiTags } from '../../common/api/api-tags';
class ShowQuestions extends Component {
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
        .associatedResource('questions', slug, { litmit: 10, page: page })
        .then(r => {
          console.log(r);
          this.setState({ data: [...this.state.data, ...r.data] });
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    }
    apiQuestions
      .getQuestionsFeed('newest', { page: page, limit: 20 })
      .then(r => {
        console.log(r);
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
    const { navigation } = this.props;
    return (
      <ShowListData
        {...this.props}
        data={this.state.data}
        component={<QuesionItem navigation={navigation} />}
        ListFooterComponent={this.loading && <ActivityIndicator />}
        onEndReached={() => this.onEndReached()}
      />
    );
  }
}

export { ShowQuestions };

import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from '../../components/header/header-layout';
import ScrollableTabView from 'react-native-scrollable-tab-view';
////import SeriesContent from '../../components/series-content';
import { ButtonBack } from '../../components/header/button-back';
import { Avatar } from '../../components/common/avatar';
import { apiSeries } from '../../common/api/api-series';
import { ButtonShare } from '../../components/header/button-share';
//import Comment from '../../components/comment';
export default class SeriesDetail extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      seriesData: []
    };
    this.hashId = this.props.navigation.state.params.hashId;
    console.log(this.hashId);
  }
  componentWillMount() {
    this.getSeriesDetal();
    this.getPost();
  }
  getSeriesDetal = () => {
    let hashId = this.props.navigation.state.params.hashId;
    apiSeries
      .getSeries(hashId)
      .then(result => {
        // console.log('result', result);
        this.setState({
          postData: result.posts.data,
          seriesData: result.series.data
        });
      })
      .catch(e => console.log(e));
  };
  getCommentSerie = () => {};

  getPost = () => {
    let hashId = this.props.navigation.state.params.hashId;
    apiSeries
      .getPosts(hashId, { page: 1, limit: 10 })
      .then(result => {
        // console.log('post', result);
      })
      .catch(e => console.log('e', e));
  };
  render() {
    let { user } = this.state.seriesData;
    let valueUser = null;
    if (user) {
      let dataUser = user.data;
      valueUser = {
        id: dataUser.id,
        avatar: dataUser.avatar[0],
        name: dataUser.name,
        username: dataUser.username
      };
    }
    return (
      <Fragment>
        <Header
          headerLeft={
            <ButtonBack onPress={() => this.props.navigation.goBack()} />
          }
          title={<Avatar style={{ flex: 1 }} value={valueUser} />}
          headerRight={<ButtonShare />}
        />
        <ScrollableTabView
          tabBarTextStyle={{ color: '#fff' }}
          tabBarBackgroundColor={'#5387c6'}
          tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
          ref={tabView => {
            this.tabView = tabView;
          }}
          style={{ marginTop: 20 }}
        >
          <View
            tabLabel="Series"
            style={{ width: 50, height: 100, backgroundColor: 'blue' }}
          >
            {/* <WebView url={urlPost} /> */}
            <Text>aaaaaaaaaa</Text>
          </View>
          <View tabLabel="dddd">
            <Text>aaaaaaaaaa</Text>
          </View>
          <View
            tabLabel="truongbk"
            style={{ width: 50, height: 100, backgroundColor: 'blue' }}
          >
            {/* <WebView url={urlPost} /> */}
            <Text>aaaaaaaaaa</Text>
          </View>
          <View tabLabel="dddd">
            <Text>aaaaaaaaaa</Text>
          </View>
        </ScrollableTabView>
      </Fragment>
    );
  }
}

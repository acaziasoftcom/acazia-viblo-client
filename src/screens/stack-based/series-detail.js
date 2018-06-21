import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import { Header } from '../../components/header/header-layout';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DetailsView from '../../components/posts/details-view';
import { ButtonBack } from '../../components/header/button-back';
import { Avatar } from '../../components/common/avatar';
import { apiSeries } from '../../common/api/api-series';
import { ButtonShare } from '../../components/header/button-share';

export default class SeriesDetail extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.hashId = this.props.navigation.state.params.hashId;
    console.log(this.hashId);
  }
  componentWillMount() {
    this.getSeriesDetal();
  }
  getSeriesDetal = () => {
    let hashId = this.props.navigation.state.params.hashId;
    apiSeries
      .getSeries(hashId)
      .then(result => {
        // console.log('series', result);
        this.setState({
          data: result.posts.data
        });
      })
      .catch(e => console.log(e));
  };
  render() {
    let user = this.state.data[0];
    let urlImage,
      name,
      username,
      urlPost = '';
    console.log('user', user);
    if (user) {
      let dataUser = user.user.data;
      urlImage = dataUser.avatar[0];
      name = dataUser.name;
      username = dataUser.username;
      urlPost = user.url;
    }
    return (
      <View>
        <Header
          headerLeft={
            <ButtonBack onPress={() => this.props.navigation.goBack()} />
          }
          title={<Avatar urlImage={urlImage} name={name} username={username} />}
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
      </View>
    );
  }
}

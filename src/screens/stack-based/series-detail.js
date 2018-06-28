import React, { Component, Fragment } from 'react';
import { Header } from '../../components/header/header-layout';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CommentScreen from '../../components/comments/comment-screen';
import { ButtonBack } from '../../components/header/button-back';
import { Avatar } from '../../components/common/avatar';
import { apiSeries } from '../../common/api/api-series';
import { ButtonShare } from '../../components/header/button-share';
import DetailsView from '../../components/posts/details-view';
import Loading from '../../components/common/loading';
export default class SeriesDetail extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      seriesData: null
    };
    this.getSeriesDetal();
  }

  getSeriesDetal = () => {
    let hashId = this.props.navigation.state.params.hashId;
    apiSeries
      .getSeries(hashId)
      .then(result => {
        console.log('result', result);
        this.setState({
          seriesData: result.series.data
        });
      })
      .catch(e => console.log(e));
  };

  // getPost = () => {
  //   let hashId = this.props.navigation.state.params.hashId;
  //   apiSeries
  //     .getPosts(hashId, { page: 1, limit: 10 })
  //     .then(() => {})
  //     .catch(e => console.log('e', e));
  // };
  render() {
    const { seriesData } = this.state;
    if (seriesData === null) {
      return <Loading />;
    }
    let comments = null;
    let valueUser = null;
    if (seriesData) {
      let { user } = seriesData;
      let dataUser = user.data;
      console.log(dataUser);
      valueUser = {
        id: dataUser.id,
        avatar: dataUser.avatar[0],
        name: dataUser.name,
        username: dataUser.username
      };
      comments = seriesData.comments.data;
    }

    return (
      <Fragment>
        <Header
          headerLeft={
            <ButtonBack onPress={() => this.props.navigation.goBack()} />
          }
          title={
            <Avatar {...this.props} style={{ flex: 1 }} value={valueUser} />
          }
          headerRight={<ButtonShare />}
        />
        <ScrollableTabView
          tabBarTextStyle={{ color: '#fff' }}
          tabBarBackgroundColor={'#5387c6'}
          tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
          ref={tabView => {
            this.tabView = tabView;
          }}
        >
          <DetailsView
            noPost
            {...this.props}
            data={seriesData}
            tabLabel="Series"
          />
          <CommentScreen
            value={valueUser}
            {...this.props}
            tabLabel="Comments"
            comments={comments}
          />
        </ScrollableTabView>
      </Fragment>
    );
  }
}

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  DeviceEventEmitter,
  TouchableOpacity
} from 'react-native';
import { ButtonMenu } from '../../components/header/button-menu';
import { apiSeries } from '../../common/api/api-series';
import { Header } from '../../components/header/header-layout';
import PostItem from '../../components/posts/post-item';

export default class Series extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      listSeriesData: []
    };
  }
  componentWillMount() {
    this.getSeries();
  }
  getSeries = () => {
    apiSeries
      .getSeriesFeed({ page: 1, limit: 20 })
      .then(result => {
        this.setState({
          listSeriesData: result.data
        });
        // console.log('result', this.state.listSeriesData);
      })
      .catch(e => console.log(e));
  };
  render() {
    let listData = this.state.listSeriesData;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header
          headerLeft={
            <ButtonMenu
              onPress={() => {
                DeviceEventEmitter.emit('DRAWER_TOGGLE', true);
              }}
            />
          }
          title="Series"
          styleTitle={{ color: '#fff' }}
        />
        <ScrollView>
          {listData.map(data => {
            console.log('item', data.hash_id);
            return (
              <PostItem
                key={Math.random()}
                value={data}
                isSeries
                {...this.props}
                onPress={() =>
                  this.props.navigation.navigate('SeriesDetailScreen', {
                    hashId: data.hash_id
                  })
                }
              />
              // <TouchableOpacity onPress={() => navigate('SeriesDetailScreen')}>
              //   <Text>next</Text>
              // </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

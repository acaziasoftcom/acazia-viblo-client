import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  DeviceEventEmitter
} from 'react-native';
import PostItem from '../../components/posts/post-item';
import { ButtonIcon } from '../../components/common/button-icon';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Icon } from 'react-native-elements';
import { apiPosts } from '../../common/api/api-posts';
const list = [1, 1, 1, 1, 1, 1];
const Sence = ({ data }) => {
  return (
    <ScrollView style={styles.containerList}>
      {data.map(value => {
        return <PostItem key={Math.random()} value={value} />;
      })}
    </ScrollView>
  );
};
export default class Post extends Component {
  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation;
    return {
      headerStyle: styles.styleHeader,
      headerTintColor: '#777BF3',
      headerTitle: '',
      headerLeft: (
        <ButtonIcon
          extraElement={
            <Icon
              name="menu"
              type="material-community"
              color="#fff"
              style={{ paddingLeft: 5 }}
            />
          }
          onPress={() => {
            DeviceEventEmitter.emit('DRAWER_TOGGLE', true);
          }}
          title={'Home'}
        />
      ),
      headerRight: (
        <ButtonIcon
          onPress={() => navigation.navigate('SearchScreen')}
          extraElement={
            <Icon name="magnify" type="material-community" color="#fff" />
          }
        />
      )
    };
  };
  constructor(props) {
    super(props);
    (this.state = {
      data: []
    }),
      this.getData(0);
  }
  getData(index) {
    let chooseData = '';
    if (index == '0') {
      chooseData = 'newest';
    } else if (index == '2') {
      chooseData = 'trending';
    } else {
      chooseData = 'editors-choice';
    }
    console.log('dd: ', chooseData);
    apiPosts
      .get(chooseData, 1)
      .then(r => {
        console.log(r);
        this.setState({ data: r.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor="#777BF3" barStyle="light-content" />
        <ScrollableTabView
          onChangeTab={i => {
            console.log(i);
            this.getData(i.i);
          }}
          tabBarTextStyle={{ color: '#fff' }}
          tabBarBackgroundColor={'#777BF3'}
          tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
          ref={tabView => {
            this.tabView = tabView;
          }}
        >
          <Sence data={this.state.data} tabLabel="Newest" />
          <Sence data={this.state.data} tabLabel="Editors choice" />
          <Sence data={this.state.data} tabLabel="Trending" />
        </ScrollableTabView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: '#F1F2EC',
    marginTop: 3
  },
  styleHeader: {
    backgroundColor: '#777BF3',
    shadowColor: '#fff',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    },
    elevation: 0
  }
});

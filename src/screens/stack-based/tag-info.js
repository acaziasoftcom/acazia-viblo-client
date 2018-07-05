import React, { Component, Fragment } from 'react';
import { StyleSheet, StatusBar, DeviceEventEmitter } from 'react-native';
import { ButtonIcon } from '../../components/common/button-icon';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Icon } from 'react-native-elements';
import PostsView from '../../components/posts/post-view';
import { Colors } from '../../common/colors';
import { ShowQuestions } from '../../components/questions/show-questions';
import { apiTags } from '../../common/api/api-tags';
import  ProfileService from '../../components/profiles/profiles';

export default class TagInfo extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: styles.styleHeader,
      headerTintColor: Colors.STRONG_CYAN,
      headerTitle: '',
      headerLeft: (
        <ButtonIcon
          extraElement={
            <Icon
              name="menu"
              type="material-community"
              color={Colors.WHITE}
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
          onPress={() => {
            navigation.push('SearchScreen');
          }}
          extraElement={
            <Icon
              name="magnify"
              type="material-community"
              color={Colors.WHITE}
            />
          }
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.getData();
  }

  getData() {
    const { slug } = this.props.navigation.state.params.data;
    apiTags
      .getTagInfo(slug)
      .then(r => {
        console.log(r);
        apiTags
          .associatedResource('posts', r.data.slug, { page: 1, limit: 10 })
          .then(r1 => {
            console.log(r1);
          })
          .catch(err1 => {
            console.log(err1);
          });
      })
      .catch(err => {
        this.loading = false;
      });
  }

  render() {
    console.log(this.props);
    const {
      followers_count,
      posts_count,
      questions_count,
      slug
    } = this.props.navigation.state.params.data;
    return (
      <Fragment>
        <StatusBar
          backgroundColor={Colors.STRONG_CYAN}
          barStyle="light-content"
        />
        <ScrollableTabView
          initialPage={0}
          prerenderingSiblingsNumber={0}
          tabBarTextStyle={{ color: Colors.WHITE }}
          tabBarBackgroundColor={Colors.STRONG_CYAN}
          tabBarUnderlineStyle={{ backgroundColor: Colors.WHITE }}
          ref={tabView => {
            this.tabView = tabView;
          }}
        >
          <PostsView
            {...this.props}
            chooseData={'newest'}
            tabLabel={posts_count + ' posts'}
            isTag
            slug={slug}
          />
          <ShowQuestions
            {...this.props}
            isTag
            tabLabel={questions_count + ' questions'}
            slug={slug}
          />
          <ProfileService
            {...this.props}
            service={4}
            isTag
            slug={slug}
            tabLabel={followers_count + ' followers'}
          />
        </ScrollableTabView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  styleHeader: {
    backgroundColor: Colors.STRONG_CYAN,
    shadowColor: Colors.WHITE,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    },
    elevation: 0
  }
});

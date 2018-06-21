import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  View,
  Text,
  Image
} from 'react-native';
import { ButtonIcon } from '../../components/common/button-icon';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Header } from '../../components/header/header-layout';
import { ButtonBack } from '../../components/header/button-back';
import DetailsView from '../../components/posts/details-view';
import { Icon } from 'react-native-elements';
const { width } = Dimensions.get('window');
export default class QuestionDetials extends Component {
  static navigationOptions = () => {
    return {
      header: null,
      headerMode: 'screen'
    };
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props.navigation.state.params.value;
    const { avatar, name, username } = user.data;
    console.log(user);
    return (
      <Fragment>
        <StatusBar backgroundColor="#5387c6" barStyle="light-content" />
        <Header
          noMarginTop={Platform.OS === 'android'}
          title={
            <View style={styles.avatarHeader}>
              <Image
                style={styles.imageAvatar}
                source={{
                  uri: avatar[0]
                }}
              />
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text style={{ fontSize: 13, color: '#fff' }}>{name}</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>{username}</Text>
              </View>
            </View>
          }
          style={{ width: width, marginTop: Platform.OS === 'ios' ? 20 : 0 }}
          headerLeft={
            <ButtonBack
              onPress={() => {
                this.props.navigation.goBack();
              }}
              color={'#fff'}
            />
          }
          headerRight={
            <ButtonIcon
              extraElement={
                <Icon
                  name="share-variant"
                  type="material-community"
                  color="#fff"
                  style={{ paddingLeft: 5 }}
                />
              }
              onPress={() => {}}
            />
          }
        />
        <ScrollableTabView
          initialPage={0}
          // onChangeTab={({ i }) => this.onChangeTab(i)}
          prerenderingSiblingsNumber={0}
          tabBarTextStyle={{ color: '#fff' }}
          tabBarBackgroundColor={'#5387c6'}
          tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
          ref={tabView => {
            this.tabView = tabView;
          }}
        >
          <DetailsView {...this.props} tabLabel="Post" />
          <DetailsView {...this.props} tabLabel="Comments" />
        </ScrollableTabView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  imageAvatar: {
    width: 35,
    height: 35,
    borderRadius: 18
  },
  avatarHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

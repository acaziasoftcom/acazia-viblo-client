import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';
import { ButtonFollow } from '../../components/common/button-follow';
import { Header } from '../../components/header/header-layout';
import { ButtonBack } from '../../components/header/button-back';
import { apiUsers } from '../../common/api/api-users';
import { Icon } from 'react-native-elements';
import PostItem from '../../components/posts/post-item';
import { Colors } from '../../common/colors';
const { width } = Dimensions.get('window');

export default class InfoUser extends Component {
  static navigationOptions = () => {
    return {
      header: null,
      headerMode: 'screen'
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posts: []
    };
    this.getUser();
  }

  async getUser() {
    const { username } = this.props.navigation.state.params.value;
    let dta = await apiUsers.getProfile(username);
    this.setState({ user: dta.data });
    let data = await apiUsers.associatedResource(username, 'posts');
    this.setState({ posts: data.data });
  }

  getIcon(value) {
    if (value.service === 'google') {
      return (
        <Icon
          name="google-plus-box"
          type="material-community"
          color={Colors.DARK_TURQUOISE}
          style={{ paddingLeft: 5 }}
        />
      );
    } else if (value.service === 'facebook') {
      return (
        <Icon
          name="facebook-box"
          type="material-community"
          color={Colors.CYAN_BLUE}
          style={{ paddingLeft: 5 }}
        />
      );
    }
  }
  render() {
    const { name } = this.props.navigation.state.params.value;
    const { user } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
        <StatusBar
          backgroundColor={Colors.STRONG_CYAN}
          barStyle="light-content"
        />
        <Header
          noMarginTop={Platform.OS === 'android'}
          title={
            <View style={styles.avatarHeader}>
              <Text style={{ fontSize: 17, color: Colors.WHITE }}>{name}</Text>
            </View>
          }
          style={{ width: width, marginTop: Platform.OS === 'ios' ? 20 : 0 }}
          headerLeft={
            <ButtonBack
              onPress={() => {
                this.props.navigation.goBack();
              }}
              color={Colors.WHITE}
            />
          }
          headerRight={<ButtonFollow onPress={() => {}} />}
        />
        {user ? (
          <ScrollView>
            <View style={styles.containerHeader}>
              <Image style={styles.image} source={{ uri: user.avatar[0] }} />
              <View style={styles.info}>
                <View>
                  <Text style={{ fontSize: 20, color: Colors.BLACK }}>
                    {user.name}
                  </Text>
                  <Text style={{ fontSize: 16, color: Colors.BLACK }}>
                    @ {user.username}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  {user.social_accounts.data.map(value => {
                    return this.getIcon(value);
                  })}
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={styles.containerFollow}>
                  <Text style={styles.text}>{user.followers_count}</Text>
                  <Text style={styles.text}>followers</Text>
                </View>
                <View style={styles.containerFollow}>
                  <Text style={styles.text}>
                    {user.subscriptions_count.users}
                  </Text>
                  <Text style={styles.text}>following</Text>
                </View>
              </View>
            </View>
            {this.state.posts.map((value, index) => {
              if (index !== this.state.posts.length - 1) {
                return <PostItem {...this.props} value={value} />;
              } else {
                return (
                  <PostItem
                    {...this.props}
                    value={value}
                    style={{ borderBottomWidth: 0 }}
                  />
                );
              }
            })}
          </ScrollView>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerHeader: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 10,
    borderBottomWidth: 5,
    borderColor: '#C2C2CA'
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: '#3C3535',
    borderWidth: 1
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 0.9 * width,
    marginTop: 10
  },
  containerFollow: {
    width: width / 2,
    flexDirection: 'row',
    borderColor: '#A8A0A0',
    borderWidth: 0.5,
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 0
  },
  text: {
    fontSize: 16,
    marginRight: 3,
    marginLeft: 4,
    color: '#000'
  }
});

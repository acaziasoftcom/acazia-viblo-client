import React, { Component, Fragment } from 'react';
import {
  Platform,
  DeviceEventEmitter,
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import { ButtonIcon } from '../../components/common/button-icon';
import { Icon } from 'react-native-elements';
import { apiTags } from '../../common/api/api-tags';
const { width } = Dimensions.get('window').width;
export default class Tags extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: styles.styleHeader,
      headerTintColor: '#5387c6',
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
          title={'Tags'}
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount = () => {
    apiTags
      .getTags({ page: 1, limit: 20 })
      .then(r => {
        console.log(r);
        this.setState({ data: r.data });
        apiTags
          .associatedResource('posts', 'javascript')
          .then(rr => {
            console.log(rr);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  renderRowItem = info => {
    return (
      <TouchableOpacity
        style={{
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: 85
        }}
      >
        <Image
          style={styles.imageAvatar}
          source={{
            uri: info.item.image
          }}
        />
        <Text>{info.item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Fragment>
        <FlatList
          style={styles.container}
          data={this.state.data}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderRowItem}
          contentContainerStyle={{ alignItems: 'center', marginBottom: 10 }}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  styleHeader: {
    backgroundColor: '#5387c6',
    shadowColor: '#fff',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    },
    elevation: 0
  },
  container: {
    width: width,
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fdfdfd'
  },
  imageAvatar: {
    width: 85,
    height: 85
  }
});

import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  DeviceEventEmitter,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import { ButtonIcon } from '../../components/common/button-icon';
import { Icon } from 'react-native-elements';
import { apiTags } from '../../common/api/api-tags';
import { Colors } from '../../common/colors';
const { width } = Dimensions.get('window').width;
export default class Tags extends Component {
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
    this.page = 1;
    this.loading = true;
    this.getData(1);
  }

  getData(page) {
    apiTags
      .getTags({ page: page, limit: 20 })
      .then(r => {
        console.log(r);
        this.setState({ data: [...this.state.data, ...r.data] });
        this.loading = false;
      })
      .catch(err => (this.loading = false));
  }

  onEndReached = () => {
    this.loading = true;
    this.getData(this.page);
    this.page++;
  };
  renderRowItem = info => {
    return (
      <TouchableOpacity style={styles.containerItem}>
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
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.loading && <ActivityIndicator />}
          onEndReached={() => {
            this.onEndReached();
          }}
        />
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
  },
  container: {
    width: width,
    flex: 1,
    paddingTop: 10,
    backgroundColor: Colors.WHITE
  },
  imageAvatar: {
    width: 85,
    height: 85
  },
  containerItem: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 85
  }
});

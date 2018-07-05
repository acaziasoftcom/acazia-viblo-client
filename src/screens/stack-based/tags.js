import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  DeviceEventEmitter,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import { ButtonIcon } from '../../components/common/button-icon';
import { Icon } from 'react-native-elements';
import { apiTags } from '../../common/api/api-tags';
import ShowListData from '../../components/common/show-list-data';
import { Colors } from '../../common/colors';
import TagItem from '../../components/tags/tag-item';
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
  render() {
    return (
      <ShowListData
        {...this.props}
        style={{ alignItems: 'center', flex: 1 }}
        numColumns={3}
        data={this.state.data}
        component={<TagItem />}
        ListFooterComponent={this.loading && <ActivityIndicator />}
        onEndReached={() => this.onEndReached()}
      />
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

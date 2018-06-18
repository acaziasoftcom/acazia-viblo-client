import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderSearch from '../../components/header/headerSearch';
// import ModalManager from '../../components/modal/modalManager';
import { Icon } from 'react-native-elements';

const PickerCus = ({ name, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, color: '#000' }}>{name}</Text>
      <Icon
        name="menu-down"
        type="material-community"
        style={{ height: 30, width: 30 }}
        color="#4a4c4f"
      />
    </TouchableOpacity>
  );
};
export default class Search extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      modalVisable: false,
      isType: false
    };
    this.isPost = true;
    (this.types = ['Post', 'Question']),
      (this.featureds = ['Post', 'Question']);
  }

  showModal = isType => {
    alert('show modal');
    this.setState({
      modalVisable: true,
      isType: isType ? true : false
    });
  };
  contentPicker = () => {
    let listDetail = this.state.isType ? this.types : this.featureds;
    return (
      <View>
        {listDetail.map(item => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    );
  };
  render() {
    let isType = true;
    return (
      <View style={styles.container}>
        {/* <ModalManager
          modalContent={this.contentPicker}
          modalVisable={this.state.modalVisable}
        /> */}
        <HeaderSearch />
        <View style={{ flexDirection: 'row' }}>
          <PickerCus name="Post" onPress={() => this.showModal(isType)} />
          <PickerCus name="Best match" onPress={() => this.showModal()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

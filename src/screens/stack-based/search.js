import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Header } from '../../components/header/header';
import ModalManager from '../../components/modal/modalManager';
import { Icon } from 'react-native-elements';
import { ButtonIcon } from '../../components/common/button-icon';

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
      textSearch: '',
      isType: false,
      type: '',
      featured: '',
      modalVisible: false
    };
    this.isPost = true;
    (this.types = ['Post', 'Question']),
      (this.featureds = [
        'Best match',
        'Most clipped',
        'Most viewed',
        'most rated',
        'Most commented',
        'Newest',
        'Oldest'
      ]);
  }

  componentWillMount() {
    this.setState({
      type: this.types[0],
      featured: this.featureds[0]
    });
  }
  showModal = isType => {
    this.setState({
      modalVisible: true,
      isType: isType ? true : false
    });
  };

  setTypeAndFeatured = value => {
    if (this.state.isType) {
      this.setState({
        type: value,
        modalVisible: false
      });
    } else {
      this.setState({
        featured: value,
        modalVisible: false
      });
    }
  };
  clearTextSearch() {
    this.setState({
      textSearch: ''
    });
  }
  render() {
    const { goBack } = this.props.navigation;
    let isType = true;
    let listDetail = this.state.isType ? this.types : this.featureds;
    console.log(listDetail);
    console.log(this.state.modalVisible);
    console.log(this.state.type);
    console.log(this.state.featured);
    return (
      <View style={styles.container}>
        <ModalManager
          contentModal={listDetail.map(item => {
            return (
              <TouchableOpacity onPress={() => this.setTypeAndFeatured(item)}>
                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 16, color: '#000' }}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
          modalVisible={this.state.modalVisible}
        />
        <Header
          leftOnPess={() => goBack()}
          midElement={
            <TextInput
              style={styles.text_input}
              placeholder="Search Viblo..."
              placeholderTextColor="#fff"
              underlineColorAndroid="transparent"
              fontSize={16}
              onChangeText={text => this.setState({ textSearch: text })}
              value={this.state.textSearch}
            />
          }
          rightElement={
            <ButtonIcon
              onPress={() => this.setState({ textSearch: '' })}
              extraElement={
                <Icon
                  name="close"
                  type="material-community"
                  color="white"
                  style={{ width: 30, height: 30 }}
                />
              }
            />
          }
          rightSearch={() => this.clearTextSearch()}
          value={this.state.textSearch}
        />
        <View style={{ flexDirection: 'row' }}>
          <PickerCus
            name={this.state.type}
            onPress={() => this.showModal(isType)}
          />
          <PickerCus
            name={this.state.featured}
            onPress={() => this.showModal()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text_input: {
    height: 40,
    width: 250,
    color: '#fff'
  }
});

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
// import { Header } from '../../components/header/header';
import ModalManager from '../../components/modal/modalManager';
import { Icon } from 'react-native-elements';
import { Header } from '../../components/header/header-layout';
import { ButtonBack } from '../../components/header/button-back';
import { ButtonX } from '../../components/header/button-x';
import { Colors } from '../../common/colors';

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
      <Text style={{ fontSize: 16, color: Colors.BLACK }}>{name}</Text>
      <Icon
        name="menu-down"
        type="material-community"
        style={{ height: 30, width: 30 }}
        color={Colors.MATTERHORN}
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
    return (
      <View style={styles.container}>
        <ModalManager
          contentModal={listDetail.map(item => {
            return (
              <TouchableOpacity onPress={() => this.setTypeAndFeatured(item)}>
                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 16, color: Colors.BLACK }}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
          modalVisible={this.state.modalVisible}
        />
        <Header
          headerLeft={
            <ButtonBack color={Colors.WHITE} onPress={() => goBack()} />
          }
          title={
            <TextInput
              style={styles.text_input}
              autoCapitalize="characters"
              placeholder="Search Viblo..."
              placeholderTextColor={Colors.WHITE}
              underlineColorAndroid="transparent"
              fontSize={16}
              onChangeText={text => this.setState({ textSearch: text })}
              value={this.state.textSearch}
            />
          }
          headerRight={
            <ButtonX onPress={() => this.setState({ textSearch: '' })} />
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
    backgroundColor: Colors.WHITE
  },
  text_input: {
    height: 40,
    width: 250,
    color: Colors.WHITE
  }
});

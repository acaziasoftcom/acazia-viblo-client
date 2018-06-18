import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class HeaderSearch extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  render() {
    return (
      <View style={styles.header}>
        <TextInput
          style={styles.text_input}
          placeholder="Search Viblo..."
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
          fontSize={16}
          onChangeText={text => this.setState({ value: text })}
          value={this.state.value}
        />
        <TouchableOpacity onPress={() => this.setState({ value: '' })}>
          <Icon
            name="close"
            type="material-community"
            color="white"
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 62,
    paddingRight: 30,
    paddingLeft: 10,
    backgroundColor: '#5387c6'
  },
  text_input: {
    height: 40,
    width: 250,
    color: '#fff'
  }
});

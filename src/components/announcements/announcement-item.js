import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
export default class AnnouncementItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{ flexDirection: 'row', justifyContent: 'center' }}
      >
        <Image source={require('../../assets/icon-viblo.png')} />
        <View>
          <Text>truongbkhn</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


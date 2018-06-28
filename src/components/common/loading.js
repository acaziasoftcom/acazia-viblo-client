import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default class Loading extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'transparent'
        }}
      >
        <ActivityIndicator size={30} color="#00ff00" />
      </View>
    );
  }
}

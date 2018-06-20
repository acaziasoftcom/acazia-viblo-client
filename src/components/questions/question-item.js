import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { Text, TouchableOpacity, View } from 'react-native';
export default class QuesionItem extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
          <Icon
            name="share-variant"
            type="material-community"
            color="#fff"
            style={{ paddingLeft: 5 }}
          />
          <Icon
            name="reply"
            type="material-community"
            color="#fff"
            style={{ paddingLeft: 5 }}
          />
        </View>
        <View>
          <Text>truongbkhn</Text>
          <View>
            <Text>s</Text>
            <Text>s</Text>
          </View>
        </View>
      </TouchableOpacity>
    );;
  }
}

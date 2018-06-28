import React, { Component } from 'react';
import { Avatar } from '../../components/common/avatar';
import Markdown from 'react-native-simple-markdown';
import { View, Text } from 'react-native';
export default class AnswerItem extends Component {
  render() {
    const { contents, valueUser } = this.props;
    console.log('contents', contents)
    return (
      <View
        style={[
          {
            marginBottom: 3,
            backgroundColor: '#fff',
            paddingLeft: 7,
            paddingRight: 5,
            paddingBottom: 4,
            paddingTop: 4,
            borderColor: '#C2C2CA',
            borderBottomWidth: 3
          },
          this.props.style
        ]}
      >
        <Avatar
          {...this.props}
          styleName={{ color: '#000' }}
          styleUserName={{ color: '#000' }}
          style={{ flex: 1 }}
          value={valueUser}
        />
        <Text style={{ marginTop: 5 }}>{contents}</Text>
      </View>
    );
  }
}

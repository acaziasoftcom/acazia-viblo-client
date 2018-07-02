import React, { Component } from 'react';
import { Avatar } from '../../components/common/avatar';
import { Colors } from '../../common/colors';
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
            backgroundColor: Colors.WHITE,
            paddingLeft: 7,
            paddingRight: 5,
            paddingBottom: 4,
            paddingTop: 4,
            borderColor: Colors.GREY_BLURRY,
            borderBottomWidth: 3
          },
          this.props.style
        ]}
      >
        <Avatar
          {...this.props}
          styleName={{ color: Colors.BLACK }}
          styleUserName={{ color: Colors.BLACK }}
          style={{ flex: 1 }}
          value={valueUser}
        />
        <Text style={{ marginTop: 5 }}>{contents}</Text>
      </View>
    );
  }
}

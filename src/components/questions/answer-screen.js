import React, { Component } from 'react';
import AnswerItem from './answer-item';
import { ScrollView, View, Text } from 'react-native';
import { Colors } from '../../common/colors';
export default class AnswerScreen extends Component {
  render() {
    const { data } = this.props;
    console.log('data : ', data.length);
    if (data.length === 0) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.WHITE,
            alignItems: 'center'
          }}
        >
          <Text style={{ marginTop: 20, fontSize: 16 }}>No answer yet</Text>
        </View>
      );
    }
    return (
      <ScrollView
        contentContainerStyle={{ paddingTop: 5, backgroundColor: Colors.WHITE }}
      >
        {data.map((value, index) => {
          const { avatar, name, username, id } = value.user.data;
          let valueUser = {
            id: id,
            avatar: avatar[0],
            name: name,
            username: username
          };
          if (index !== data.length - 1) {
            return (
              <AnswerItem
                {...this.props}
                contents={value.contents}
                valueUser={valueUser}
              />
            );
          } else {
            return (
              <AnswerItem
                {...this.props}
                style={{ borderBottomWidth: 0 }}
                contents={value.contents}
                valueUser={valueUser}
              />
            );
          }
        })}
      </ScrollView>
    );
  }
}

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
const Item = ({ icon, count, style, type }) => {
  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      <Icon name={icon} type={type} color="#71726A" size={20} />
      <Text style={{ marginLeft: 5 }}>{count}</Text>
    </View>
  );
};

const icons = [
  {
    id: 1,
    icon: 'eye',
    count: 0,
    type: 'font-awesome'
  },
  {
    id: 2,
    icon: 'paperclip',
    count: 0,
    type: 'font-awesome'
  },
  {
    id: 3,
    icon: 'comments',
    count: 0,
    type: 'font-awesome'
  },
  {
    id: 4,
    icon: 'sort',
    count: 0,
    type: 'font-awesome'
  }
];
export default class PostItem extends Component {
  handleContentsShort(value) {
    return value.split('↵↵↵↵');
  }
  render() {
    const { title, contents_short, user } = this.props.value;
    const { avatar, name, username } = user.data;
    //console.log(this.handleContentsShort(contents_short));
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          marginBottom: 5,
          paddingLeft: 10,
          paddingTop: 4,
          paddingBottom: 4
        }}
        key={Math.random()}
      >
        <View style={styles.conainerHeader}>
          <Image
            style={{ width: 45, height: 45, borderRadius: 23 }}
            source={{
              uri: avatar[0]
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 13 }}>{name}</Text>
            <Text style={{ fontSize: 12 }}>{username}</Text>
          </View>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerIcon}>
          {icons.map(value => {
            if (value.id !== 1) {
              return (
                <Item
                  key={Math.random()}
                  style={{ marginLeft: 20 }}
                  icon={value.icon}
                  count={value.count}
                  type={value.type}
                />
              );
            } else {
              return (
                <Item
                  key={Math.random()}
                  icon={value.icon}
                  count={value.count}
                  type={value.type}
                />
              );
            }
          })}
        </View>
        {/* {this.handleContentsShort(contents_short).length == 3 ? (
          <Image
            style={{ width: 300, height: 45, borderRadius: 23 }}
            source={{
              uri: this.handleContentsShort(contents_short)[1]
            }}
          />
        ) : null} */}
        <Text>{contents_short}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  conainerHeader: {
    flexDirection: 'row'
  },
  title: { fontSize: 18, color: '#000', marginBottom: 12, marginTop: 5 },
  containerIcon: { flexDirection: 'row', marginBottom: 17 }
});

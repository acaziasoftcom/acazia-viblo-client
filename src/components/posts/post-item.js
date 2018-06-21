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
  },
  {
    id: 5,
    icon: 'paste',
    count: 0,
    type: 'font-awesome'
  }
];
export default class PostItem extends Component {
  render() {
    const isSeries = this.props.isSeries;
    const value = this.props.value;
    const { title, contents_short, user, contents } = value;
    const { avatar, name, username } = user.data;
    let count = [
      value.views_count,
      value.clips_count,
      value.comments_count,
      value.points,
      value.posts_count
    ];
    //console.log(this.handleContentsShort(contents_short));
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          marginBottom: 5,
          paddingHorizontal: 10,
          paddingVertical: 4
        }}
        key={Math.random()}
        onPress={() => {
          this.props.navigation.push('PostDetailsScreen', {
            value: this.props.value
          });
        }}
      >
        <View style={styles.conainerHeader}>
          <Image
            style={{ width: 45, height: 45, borderRadius: 23 }}
            source={{
              uri: avatar[0]
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 14, color: '#000' }}>{name}</Text>
            <Text style={{ fontSize: 13 }}>{username}</Text>
          </View>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerIcon}>
          {icons.map(icon => {
            if (icon.id === 4 && isSeries);
            else if (icon.id === 5 && !isSeries);
            else
              return (
                <Item
                  key={Math.random()}
                  style={{ marginLeft: icon.id == 1 ? 0 : 20 }}
                  icon={icon.icon}
                  count={count[icon.id - 1]}
                  type={icon.type}
                />
              );
          })}
        </View>
        <Text
          style={{ fontSize: 15, color: '#000' }}
          numberOfLines={4}
          ellipsizeMode="tail"
        >
          {isSeries ? contents : contents_short + '...'}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  conainerHeader: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    color: '#000',
    marginBottom: 12,
    marginTop: 5
  },
  containerIcon: {
    flexDirection: 'row',
    marginBottom: 17
  }
});

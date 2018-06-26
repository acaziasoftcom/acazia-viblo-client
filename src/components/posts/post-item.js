import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Markdown from 'react-native-simple-markdown';

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
  linkView() {
    if (this.props.isSeries) {
      this.props.navigation.push('SeriesDetailScreen', {
        hashId: this.props.value.hash_id
      });
    } else {
      this.props.navigation.push('PostDetailsScreen', {
        value: this.props.value
      });
    }
  }
  render() {
    const isSeries = this.props.isSeries;
    const {
      title,
      contents_short,
      user,
      contents,
      views_count,
      clips_count,
      comments_count,
      points,
      posts_count
    } = this.props.value;
    const { avatar, name, username } = user.data;
    let count = [views_count, clips_count, comments_count, points, posts_count];
    return (
      <TouchableOpacity
        style={[
          {
            backgroundColor: '#fff',
            marginBottom: 5,
            paddingHorizontal: 10,
            paddingVertical: 4
          },
          this.props.style
        ]}
        key={Math.random()}
        onPress={() => {
          this.linkView();
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
        <Markdown
          errorHandler={(errors, children) => console.log(errors, children)}
        >
          {isSeries ? contents + '...' : contents_short}
        </Markdown>
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

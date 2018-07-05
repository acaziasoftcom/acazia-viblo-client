import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default class TagItem extends Component {
  render() {
    const { image, name } = this.props.value;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.push('TagInfoScreen', {
            data: this.props.value
          });
        }}
        style={styles.containerItem}
      >
        <Image
          style={styles.imageAvatar}
          source={{
            uri: image
          }}
        />
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  imageAvatar: {
    width: 85,
    height: 85
  },
  containerItem: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 85
  }
});

import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Avatar = ({
  value,
  style,
  styleImage,
  styleName,
  styleUserName,
  ...props
}) => {
  console.log('value: ', props);
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => {
        props.navigation.push('InfoUserScreen', { value: value });
      }}
    >
      <Image
        style={[styles.image, styleImage]}
        source={{ uri: value.avatar }}
      />
      <View style={styles.info_person}>
        <Text style={[styles.name, styleName]}>{value.name}</Text>
        <Text style={[styles.username, styleUserName]}>
          {'@' + value.username}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  info_person: {
    marginLeft: 7
  },
  name: {
    fontSize: 13,
    color: '#fff'
  },
  username: {
    fontSize: 12,
    color: '#fff'
  }
});

export { Avatar };

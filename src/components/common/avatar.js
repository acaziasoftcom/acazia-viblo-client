import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Avatar = ({
  urlImage,
  name,
  username,
  moreInfo,
  style,
  styleImage,
  styleName,
  styleUserName
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={[styles.image, styleImage]} source={{ uri: urlImage }} />
      <View style={styles.info_person}>
        <Text style={[styles.name, styleName]}>{name}</Text>
        <Text style={[styles.username, styleUserName]}>
          {'@' + username}
          {moreInfo ? ' - ' + moreInfo : null}
        </Text>
      </View>
    </View>
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
    marginLeft: 5
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

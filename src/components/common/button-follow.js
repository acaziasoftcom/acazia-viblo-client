import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonFollow = ({ onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touch, style]}>
      <Text style={{ color: '#fff' }}>FOLLOW</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    marginHorizontal: 5,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    paddingBottom: 5,
    paddingTop: 5
  }
});

export { ButtonFollow };

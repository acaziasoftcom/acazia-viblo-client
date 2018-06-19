'use strict';

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const ButtonBack = ({ onPress, color = 'black', style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touch, style]}>
      <Icon
        type="material-community"
        style={styles.icon}
        color={color}
        size={20}
        name="arrow-left"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    marginHorizontal: 3,
    paddingRight: 7,
    paddingLeft: 5,
    backgroundColor: 'transparent'
  },
  icon: {
    color: '#fff',
    fontSize: 39,
    textAlign: 'center'
  }
});

export { ButtonBack };

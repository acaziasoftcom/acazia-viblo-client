import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../../common/colors';

const ButtonBack = ({ onPress, color, style, size }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touch, style]}>
      <Icon
        type="material-community"
        style={styles.icon}
        color={color ? color : Colors.WHITE}
        size={size ? size : 30}
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
    color: Colors.WHITE,
    fontSize: 39,
    textAlign: 'center'
  }
});

export { ButtonBack };

'use strict';

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from '../../common/colors';

const ButtonNext = props => {
  const { onPress, style } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.touch, style]}>
      <Icon
        type="ionicon"
        name="ios-arrow-forward"
        size={24}
        color={Colors.TANGAROA}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    backgroundColor: 'transparent',
    paddingLeft: 10,
    alignItems: 'center'
  }
});

export { ButtonNext };

import React from 'react';
import { Icon, StyleSheet } from 'react-native-elements';
import { ButtonIcon } from '../common/button-icon';

const ButtonShare = ({ onPress, style }) => {
  return (
    <ButtonIcon
      style={[styles.touch, style]}
      onPress={onPress}
      extraElement={
        <Icon
          name="share-variant"
          type="material-community"
          color="#fff"
          style={{ width: 30, height: 30 }}
        />
      }
    />
  );
};

const styles = {
  touch: {
    marginHorizontal: 3,
    paddingRight: 7,
    paddingLeft: 5,
    backgroundColor: 'transparent'
  }
};
export { ButtonShare };

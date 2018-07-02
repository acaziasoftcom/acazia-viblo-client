import React from 'react';
import { Icon } from 'react-native-elements';
import { ButtonIcon } from '../common/button-icon';
import { Colors } from '../../common/colors';

const ButtonShare = ({ onPress, style }) => {
  return (
    <ButtonIcon
      style={[styles.touch, style]}
      onPress={onPress}
      extraElement={
        <Icon
          name="share-variant"
          type="material-community"
          color={Colors.WHITE}
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

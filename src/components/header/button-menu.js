import React from 'react';
import { Icon } from 'react-native-elements';
import { ButtonIcon } from '../common/button-icon';

const ButtonMenu = ({ onPress, style }) => {
  return (
    <ButtonIcon
      style={style}
      onPress={onPress}
      extraElement={
        <Icon
          name="menu"
          type="material-community"
          color="white"
          style={{ width: 30, height: 30 }}
        />
      }
    />
  );
};

export { ButtonMenu };

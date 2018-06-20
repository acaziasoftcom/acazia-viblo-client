import React from 'react';
import { Icon } from 'react-native-elements';
import { ButtonIcon } from '../common/button-icon';

const ButtonX = ({ onPress, style }) => {
  return (
    <ButtonIcon
      style={style}
      onPress={onPress}
      extraElement={
        <Icon
          name="close"
          type="material-community"
          color="white"
          style={{ width: 30, height: 30 }}
        />
      }
    />
  );
};

export { ButtonX };

import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonIcon = ({
  style,
  onPress,
  title,
  extraElement,
  textColor = '#fff'
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.row, style]}>
      {extraElement && React.cloneElement(extraElement)}
      <Text semiBold style={[styles.bottomText, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 5
  },
  bottomText: {
    color: '#fff',
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  }
});

export { ButtonIcon };

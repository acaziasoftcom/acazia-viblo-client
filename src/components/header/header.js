import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { ButtonIcon } from '../common/button-icon';

const Header = ({ leftElement, rightElement, midElement, leftOnPess }) => {
  return (
    <View style={styles.header}>
      {leftElement ? (
        leftElement
      ) : (
        <ButtonIcon
          onPress={() => leftOnPess}
          extraElement={
            <Icon
              name="arrow-left"
              type="material-community"
              color="white"
              style={{ width: 30, height: 30 }}
            />
          }
        />
      )}
      {midElement ? midElement : null}
      {rightElement ? rightElement : null}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 62,
    paddingRight: 30,
    paddingLeft: 10,
    backgroundColor: '#5387c6'
  }
  // text_input: {
  //   height: 40,
  //   width: 250,
  //   color: '#fff'
  // }
});

export { Header };

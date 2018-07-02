import React, { Fragment } from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Icon } from 'react-native-elements';
import { Colors } from '../../common/colors';
const ViewAbsolute = ({ isShow, onPress }) => {
  return (
    <Fragment>
      {isShow && (
        <TouchableOpacity style={[styles.buttonAbsolute, styles.cycle]}>
          <Icon
            name="menu-up"
            type="material-community"
            color={Colors.LIGHT_GREEN}
            size={40}
          />
        </TouchableOpacity>
      )}
      {isShow && (
        <TouchableOpacity style={[styles.buttonAbsolute, styles.cycle]}>
          <Icon
            name="menu-down"
            type="material-community"
            color={Colors.RED}
            size={40}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onPress} style={styles.buttonAbsolute}>
        <Text>+1</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  buttonAbsolute: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREEN,
    position: 'absolute',
    marginTop: height - 114,
    marginLeft: width - 84,
    zIndex: 9999999
  },
  cycle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: 50,
    marginTop: height - 228,
    marginLeft: width - 73
  }
});

export { ViewAbsolute };

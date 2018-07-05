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
            color={Colors.STRONG_CYAN}
            size={40}
          />
        </TouchableOpacity>
      )}
      {isShow && (
        <TouchableOpacity
          style={[
            styles.buttonAbsolute,
            styles.cycle,
            { marginTop: height - 175 }
          ]}
        >
          <Icon
            name="menu-down"
            type="material-community"
            color={Colors.STRONG_CYAN}
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
    height: 62,
    width: 62,
    borderRadius: 31,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.STRONG_CYAN,
    position: 'absolute',
    marginTop: height - 114,
    marginLeft: width - 84,
    zIndex: 9999999,
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 9
  },
  cycle: {
    height: 38,
    width: 38,
    borderRadius: 19,
    marginBottom: 50,
    marginTop: height - 228,
    marginLeft: width - 70
  }
});

export { ViewAbsolute };

import React, { Component } from 'react';
import { StyleSheet, View, Text, DeviceEventEmitter } from 'react-native';
import { ButtonIcon } from '../../components/common/button-icon';
import { Icon } from 'react-native-elements';
import { Colors } from '../../common/colors';
export default class Announcements extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: styles.styleHeader,
      headerTintColor: Colors.STRONG_CYAN,
      headerTitle: '',
      headerLeft: (
        <ButtonIcon
          extraElement={
            <Icon
              name="menu"
              type="material-community"
              color={Colors.WHITE}
              style={{ paddingLeft: 5 }}
            />
          }
          onPress={() => {
            DeviceEventEmitter.emit('DRAWER_TOGGLE', true);
          }}
          title={'Announcements'}
        />
      ),
      headerRight: (
        <ButtonIcon
          onPress={() => {
            navigation.push('SearchScreen');
          }}
          extraElement={
            <Icon
              name="magnify"
              type="material-community"
              color={Colors.WHITE}
            />
          }
        />
      )
    };
  };

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//     this.page = 1;
//     this.loading = true;
//     this.getData(1);
//   }
//   getData(page) {
//     apiNotifications
//       .getNotificationSettings()
//       .then(r => console.log(r))
//       .catch(err => console.log(err));
//   }

//   onEndReached = () => {
//     console.log('sss: ', this.page);
//     this.loading = true;
//     this.getData(this.page);
//     this.page++;
//   };
  render() {
    return (
      <View>
        <Text>Sẽ có sau</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  styleHeader: {
    backgroundColor: Colors.STRONG_CYAN,
    shadowColor: Colors.WHITE,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    },
    elevation: 0
  }
});

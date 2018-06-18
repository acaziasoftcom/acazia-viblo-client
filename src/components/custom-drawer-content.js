import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';
const { width } = Dimensions.get('window');
const ItemOption = ({ name, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerItem}>
      <Icon name={icon} type="material-community" color="#5E5EF4" size={24} />
      <Text style={{ marginLeft: 15, fontSize: 16 }}>{name}</Text>
    </TouchableOpacity>
  );
};

class CustomDrawer extends Component {
  menuOptions = () => {
    let options = [
      {
        id: 1,
        name: 'Posts',
        icon: 'book-open',
        onPress: () => {
          alert('vao 1');
        }
      },
      {
        id: 2,
        name: 'Series',
        icon: 'buffer',
        onPress: () => {
          alert('vao 2');
        }
      },
      {
        id: 3,
        name: 'Question',
        icon: 'help-circle',
        onPress: () => {
          alert('vao 3');
        }
      },
      {
        id: 4,
        name: 'Tags',
        icon: 'tag-multiple',
        onPress: () => {
          alert('vao 4');
        }
      },
      {
        id: 5,
        name: 'Announcements',
        icon: 'bell-sleep',
        onPress: () => {
          alert('vao 5');
        }
      },
      {
        id: 6,
        name: 'Login',
        icon: 'login',
        onPress: () => {
          alert('vao 6');
        }
      },
      {
        id: 7,
        name: 'Register',
        icon: 'login',
        onPress: () => {
          alert('vao 7');
        }
      }
    ];
    return options;
  };
  render() {
    return (
      <View style={{ marginTop: 20, justifyContent: 'center', flex: 1 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 150
          }}
        >
          <Text>Trương bk gn</Text>
        </View>
        <ScrollView
          contentContainerStyle={{ backgroundColor: '#F1F2EC', flex: 1 }}
        >
          {this.menuOptions().map(value => {
            return (
              <ItemOption
                key={Math.random()}
                name={value.name}
                icon={value.icon}
                onPress={value.onPress}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerItem: {
    marginLeft: 0.1 * width,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center'
  }
});

export { CustomDrawer };

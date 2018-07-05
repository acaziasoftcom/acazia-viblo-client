import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  DeviceEventEmitter
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
const { width } = Dimensions.get('window');
import { navigate } from '../actions/actions-navigaion';
import { Colors } from '../common/colors';
const ItemOption = ({ name, icon, onPress, type, size }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerItem}>
      <Icon
        name={icon}
        type={type}
        color={Colors.STRONG_CYAN}
        size={size ? size : 24}
      />
      <Text style={{ marginLeft: 17, fontSize: 17 }}>{name}</Text>
    </TouchableOpacity>
  );
};

class CustomDrawer extends Component {
  showScreen(screen) {
    const { dispatch } = this.props;
    dispatch(navigate(screen));
    DeviceEventEmitter.emit('DRAWER_TOGGLE');
  }
  menuOptions = () => {
    let options = [
      {
        id: 1,
        name: 'Posts',
        type: 'font-awesome',
        icon: 'paste',
        onPress: () => {
          this.showScreen('PostScreen');
        }
      },
      {
        id: 2,
        name: 'Series',
        type: 'material-community',
        icon: 'buffer',
        size: 27,
        onPress: () => {
          this.showScreen('SeriesScreen');
          //SeriesScreen
        }
      },
      {
        id: 3,
        name: 'Question',
        type: 'material-community',
        icon: 'help-circle',
        size: 27,
        onPress: () => {
          this.showScreen('QuestionsScreen');
          //QuestionsScreen
        }
      },
      {
        id: 4,
        name: 'Tags',
        type: 'material-community',
        icon: 'tag-multiple',
        size: 27,
        onPress: () => {
          this.showScreen('TagsScreen');
        }
      },
      {
        id: 5,
        name: 'Announcements',
        type: 'material-community',
        icon: 'bell-sleep',
        size: 27,
        onPress: () => {
          this.showScreen('AnnouncementsScreen');
        }
      },
      {
        id: 6,
        name: 'Login',
        type: 'material-community',
        icon: 'login',
        size: 27,
        onPress: () => {
          alert('vao 6');
        }
      },
      {
        id: 7,
        name: 'Register',
        type: 'material-community',
        icon: 'login',
        size: 27,
        onPress: () => {
          alert('vao 7');
        }
      }
    ];
    return options;
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ marginTop: 20, justifyContent: 'center', flex: 1 }}>
        <TouchableOpacity
          style={styles.avatarWrapper}
          onPress={() => {
            this.showScreen('ProfilesScreen');
          }}
        >
          <Image
            style={styles.imageAvatar}
            source={{
              uri:
                'http://i.9mobi.vn/cf/images/2015/03/nkk/nhung-hinh-anh-dep-3.jpg'
            }}
          />
          <Text style={styles.textName}>Nguyễn Công Trương</Text>
        </TouchableOpacity>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: Colors.LIGHT_GREY,
            flex: 1
          }}
        >
          {this.menuOptions().map(value => {
            return (
              <ItemOption
                key={Math.random()}
                name={value.name}
                icon={value.icon}
                type={value.type}
                size={value.size}
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
  },
  avatarWrapper: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE
  },
  imageAvatar: {
    width: 75,
    height: 75,
    marginBottom: 5,
    borderRadius: 38
  },
  textName: {
    color: Colors.BLACK,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500'
  }
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawer);

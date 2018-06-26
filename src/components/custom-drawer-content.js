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
const ItemOption = ({ name, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerItem}>
      <Icon name={icon} type="material-community" color="#5E5EF4" size={24} />
      <Text style={{ marginLeft: 15, fontSize: 16 }}>{name}</Text>
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
    const { dispatch } = this.props;
    let options = [
      {
        id: 1,
        name: 'Posts',
        icon: 'book-open',
        onPress: () => {
          this.showScreen('PostScreen');
        }
      },
      {
        id: 2,
        name: 'Series',
        icon: 'buffer',
        onPress: () => {
          this.showScreen('SeriesScreen');
          //SeriesScreen
        }
      },
      {
        id: 3,
        name: 'Question',
        icon: 'help-circle',
        onPress: () => {
          this.showScreen('QuestionsScreen');
          //QuestionsScreen
        }
      },
      {
        id: 4,
        name: 'Tags',
        icon: 'tag-multiple',
        onPress: () => {
          this.showScreen('TagsScreen');
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

  constructor(props) {
    super(props);
    console.log(props);
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
  },
  avatarWrapper: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  imageAvatar: {
    width: 75,
    height: 75,
    marginBottom: 5,
    borderRadius: 38
  },
  textName: {
    color: '#000',
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

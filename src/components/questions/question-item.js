import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors } from '../../common/colors';
export default class QuesionItem extends Component {
  render() {
    const { answers_count, comments_count, title, tags } = this.props.value;
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={() => {
          this.props.navigation.push('QuestionDetialsScreen', {
            value: this.props.value
          });
        }}
      >
        <View style={styles.containerIcon}>
          <View style={styles.containerItem}>
            <Icon
              name="sort"
              type="font-awesome"
              color={Colors.BLACK}
              size={22}
            />
            <Icon
              name="reply"
              type="material-community"
              color={Colors.BLACK}
              size={17}
            />
          </View>
          <View style={styles.containerItem}>
            <Text style={{ marginLeft: 3 }}>{answers_count}</Text>
            <Text style={{ marginLeft: 3 }}>{comments_count}</Text>
          </View>
        </View>
        <View style={styles.containerDetails}>
          <Text style={{ fontSize: 17, color: Colors.LIGHT_BLUE }}>{title}</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text>
              {tags.data.map((value, index) => {
                if (index != tags.data.length - 1) {
                  return value.name + ', ';
                } else {
                  return value.name;
                }
              })}
            </Text>
            <Text>s</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    minHeight: 75,
    backgroundColor: Colors.WHITE,
    marginBottom: 3,
    borderColor: Colors.GREY_BLURRY,
    borderBottomWidth: 3
  },
  containerIcon: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'flex-start',
    paddingLeft: 10,
    flexDirection: 'row'
  },
  containerItem: {
    justifyContent: 'space-between',
    flex: 1,
    height: 59
  },
  containerDetails: {
    flex: 5,
    justifyContent: 'space-between',
    paddingTop: 3,
    paddingBottom: 3
  }
});

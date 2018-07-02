import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
const { width } = Dimensions.get('window');
import Loading from '../common/loading';
import AnswerItem from '../questions/answer-item';
import { Colors } from '../../common/colors';

export default class CommentScreen extends Component {
  render() {
    const { comments, value } = this.props;
    if (!comments || !value) {
      return <Loading />;
    }
    const { avatar } = value;
    console.log(value);

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.containerResponse}>
          <Image style={styles.image} source={{ uri: avatar }} />
          <Text>Write a response ...</Text>
        </TouchableOpacity>
        {comments.length !== 0 ? (
          <ScrollView>
            {comments.map(cmt => {
              console.log(cmt.contents);
              return (
                <AnswerItem
                  {...this.props}
                  contents={cmt.contents}
                  valueUser={value}
                />
              );
            })}
          </ScrollView>
        ) : (
          <Text style={{ marginTop: 40, fontSize: 16 }}>No comments yet</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 23,
    marginRight: 15,
    marginLeft: 10,
    borderColor: Colors.RICH_BLUE,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5
  },
  containerResponse: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    marginTop: 10,
    borderBottomColor: Colors.LAVENDER,
    borderBottomWidth: 1
  }
});

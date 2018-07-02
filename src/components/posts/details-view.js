import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';
import { apiPosts } from '../../common/api/api-posts';
import Loading from '../common/loading';
const { width } = Dimensions.get('window');
import { Colors } from '../../common/colors';
import Markdown from 'react-native-simple-markdown';

export default class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    console.log(this.props.data);
    if (!this.props.noPost) {
      this.getPostDetail();
    }
  }

  getPostDetail = () => {
    console.log('data', this.state.data);
    apiPosts
      .getPost(this.props.slug)
      .then(r => {
        console.log('r', r.post.data);
        this.setState({ data: r.post.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { data } = this.state;
    if (data == undefined || data == null) {
      return <Loading />;
    }
    console.log(data);
    let { contents, tags, title } = data;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>{title}</Text>
        <View
          style={{
            marginBottom: 10,
            marginTop: 10,
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row'
          }}
        >
          {tags.data.map(value => {
            return (
              <TouchableOpacity
                key={Math.random()}
                style={styles.containerIcon}
              >
                <Text style={styles.textNameIcon}>{value.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Markdown
          style={{ paddingLeft: 5, paddingRight: 5 }}
          errorHandler={(errors, children) => console.log(errors, children)}
        >
          {contents}
        </Markdown>
      </ScrollView>
      // <WebView source={{ uri: url }} style={{ marginTop: 20 }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    width: width,
    //alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 10,
    paddingBottom: 20,
    paddingRight: 5,
    backgroundColor: Colors.WHITE
  },
  containerIcon: {
    borderColor: Colors.SCHEMES,
    borderWidth: 0.5,
    borderRadius: 20,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
    marginBottom: 5
  },
  textNameIcon: {
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 13,
    paddingTop: 5,
    paddingBottom: 5
  }
});

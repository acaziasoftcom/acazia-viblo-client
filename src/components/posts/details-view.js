import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { apiPosts } from '../../common/api/api-posts';
const { width } = Dimensions.get('window');
export default class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    const { slug } = this.props.navigation.state.params.value;
    console.log(this.props.navigation.state.params.value);
    apiPosts
      .getPost(slug)
      .then(r => {
        console.log(r);
        this.setState({ data: r.post.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (this.state.data) {
      var { contents, tags, title } = this.state.data;
      // canonical_url  is webview in result api
    }
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>
          {this.state.data !== null ? title : ''}
        </Text>
        <View style={styles.title}>
          {this.state.data &&
            tags.data.map(value => {
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
        <Text style={{ fontSize: 15 }}>
          {this.state.data !== null ? contents : ''}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 10,
    paddingBottom: 20,
    paddingRight: 5,
    backgroundColor: '#fff'
  },
  title: {
    flexDirection: 'row',
    width: width,
    paddingLeft: 10,
    marginBottom: 15,
    marginTop: 15
  },
  containerIcon: {
    borderColor: '#686975',
    borderWidth: 0.5,
    borderRadius: 20,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50
  },
  textNameIcon: {
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 13,
    paddingTop: 5,
    paddingBottom: 5
  }
});

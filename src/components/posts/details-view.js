import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
const { width } = Dimensions.get('window');
import Markdown from 'react-native-simple-markdown';

export default class DetailsView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.data) {
      var { contents, tags, title } = this.props.data;
    }
    // console.log('da', tags);
    console.log('tag', tags);
    let tagsData = [];
    if (tags) {
      tagsData = tags.data;
    }
    // canonical_url  is webview in result api
    // let url = this.props.postUrl;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>{title}</Text>
        <View style={styles.title}>
          {tagsData.map(value => {
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

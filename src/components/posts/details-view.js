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
      data: this.props.data
    };
    console.log(this.props.data);
    // console.log(this.props.navigation.state.params.value);
  }
  render() {
    var { contents, tags, title } = this.state.data;
    // canonical_url  is webview in result api

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>{title}</Text>
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
        <Text style={{ fontSize: 15 }}>{contents}</Text>
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

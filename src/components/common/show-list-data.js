import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
export default class ShowListData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, component } = this.props;
    console.log(data);
    return (
      <ScrollView style={styles.containerList}>
        {data.map(value => {
          return React.cloneElement(component, {
            value: value,
            ...this.props
          });
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: '#F1F2EC',
    marginTop: 3
  }
});

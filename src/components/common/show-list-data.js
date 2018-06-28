import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Loading from './loading';
export default class ShowListData extends Component {
  constructor(props) {
    super(props);
  }

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  render() {
    const { data, component, onEndReached } = this.props;
    if (data.length === 0) {
      return <Loading />;
    }

    return (
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={(value, index) => {
          if (value.index !== data.length - 1) {
            return React.cloneElement(component, {
              value: value.item,
              ...this.props,
              key: index
            });
          } else {
            return React.cloneElement(component, {
              value: value.item,
              ...this.props,
              key: index,
              style: { borderBottomWidth: 0 }
            });
          }
        }}
        style={{ backgroundColor: '#fff' }}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    flex: 1,
    marginRight: 15,
    backgroundColor: '#CED0CE'
  }
});

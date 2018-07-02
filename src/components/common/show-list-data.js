import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Loading from './loading';
import { Colors } from '../../common/colors';
export default class ShowListData extends Component {
  constructor(props) {
    super(props);
  }

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  render() {
    const {
      data,
      component,
      onEndReached,
      ListFooterComponent,
      onEndReachedThreshold
    } = this.props;
    if (data.length === 0) {
      return <Loading />;
    }

    return (
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={value => {
          if (value.index !== data.length - 1) {
            return React.cloneElement(component, {
              value: value.item,
              ...this.props,
              key: value.item.id
            });
          } else {
            return React.cloneElement(component, {
              value: value.item,
              ...this.props,
              key: value.item.id,
              style: { borderBottomWidth: 0 }
            });
          }
        }}
        style={{ backgroundColor: Colors.WHITE }}
        onEndReached={onEndReached}
        onEndReachedThreshold={
          onEndReachedThreshold ? onEndReachedThreshold : 0.5
        }
        ListFooterComponent={ListFooterComponent}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    flex: 1,
    marginRight: 15,
    backgroundColor: Colors.GHOST
  }
});

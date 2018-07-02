import React, { Component, Fragment } from 'react';
import {
  ActivityIndicator,
  DeviceEventEmitter,
  StyleSheet
} from 'react-native';
import QuesionItem from '../../components/questions/question-item';
import { apiQuestions } from '../../common/api/api-questions';
import { ButtonIcon } from '../../components/common/button-icon';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Icon } from 'react-native-elements';
import ShowListData from '../../components/common/show-list-data';
import { Colors } from '../../common/colors';

const ShowQuestions = ({ data, navigation, loading, onEndReached }) => {
  return (
    <ShowListData
      {...this.props}
      data={data}
      component={<QuesionItem navigation={navigation} />}
      ListFooterComponent={loading && <ActivityIndicator />}
      onEndReached={() => onEndReached()}
    />
  );
};
export default class Questions extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: styles.styleHeader,
      headerTintColor: Colors.STRONG_CYAN,
      headerTitle: '',
      headerLeft: (
        <ButtonIcon
          extraElement={
            <Icon
              name="menu"
              type="material-community"
              color={Colors.WHITE}
              style={{ paddingLeft: 5 }}
            />
          }
          onPress={() => {
            DeviceEventEmitter.emit('DRAWER_TOGGLE', true);
          }}
          title={'Questions'}
        />
      ),
      headerRight: (
        <ButtonIcon
          onPress={() => {
            navigation.push('SearchScreen');
          }}
          extraElement={
            <Icon
              name="magnify"
              type="material-community"
              color={Colors.WHITE}
            />
          }
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loading = true;
    this.page = 1;
    this.getData(1);
  }

  getData(page) {
    apiQuestions
      .getQuestionsFeed('newest', { page: page, limit: 20 })
      .then(r => {
        console.log(r);
        this.setState({ data: [...this.state.data, ...r.data] });
        this.loading = false;
      })
      .catch(err => {
        this.loading = false;
      });
  }

  onEndReached = () => {
    console.log('sss: ', this.page);
    this.loading = true;
    console.log(this.loading);
    this.getData(this.page);
    this.page++;
  };

  render() {
    return (
      <Fragment>
        <ScrollableTabView
          initialPage={0}
          // onChangeTab={({ i }) => this.onChangeTab(i)}
          prerenderingSiblingsNumber={0}
          tabBarTextStyle={{ color: Colors.WHITE }}
          tabBarBackgroundColor={Colors.STRONG_CYAN}
          tabBarUnderlineStyle={{ backgroundColor: Colors.WHITE }}
          ref={tabView => {
            this.tabView = tabView;
          }}
        >
          <ShowQuestions
            navigation={this.props.navigation}
            data={this.state.data}
            tabLabel="Newest"
            loading={this.loading}
            onEndReached={this.onEndReached}
          />
          <ShowQuestions
            navigation={this.props.navigation}
            data={this.state.data}
            tabLabel="Unsolved"
            onEndReached={this.onEndReached}
          />
        </ScrollableTabView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  styleHeader: {
    backgroundColor: Colors.STRONG_CYAN,
    shadowColor: Colors.WHITE,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    },
    elevation: 0
  }
});

import React, { Component, Fragment } from 'react';
import { ScrollView, DeviceEventEmitter, StyleSheet } from 'react-native';
import QuesionItem from '../../components/questions/question-item';
import { apiQuestions } from '../../common/api/api-questions';
import { ButtonIcon } from '../../components/common/button-icon';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Icon } from 'react-native-elements';

const ShowQuestions = ({ data, navigation }) => {
  return (
    <ScrollView>
      {data.map(value => {
        console.log('item', value);
        return (
          <QuesionItem
            key={Math.random()}
            value={value}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};
export default class Tags extends Component {
  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation;
    return {
      headerStyle: styles.styleHeader,
      headerTintColor: '#5387c6',
      headerTitle: '',
      headerLeft: (
        <ButtonIcon
          extraElement={
            <Icon
              name="menu"
              type="material-community"
              color="#fff"
              style={{ paddingLeft: 5 }}
            />
          }
          onPress={() => {
            DeviceEventEmitter.emit('DRAWER_TOGGLE', true);
          }}
          title={'Tags'}
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount = () => {
    apiQuestions
      .getQuestionsFeed('newest', { page: 1, limit: 20 })
      .then(r => {
        console.log(r);
        this.setState({ data: r.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <ScrollableTabView
          initialPage={0}
          // onChangeTab={({ i }) => this.onChangeTab(i)}
          prerenderingSiblingsNumber={0}
          tabBarTextStyle={{ color: '#fff' }}
          tabBarBackgroundColor={'#5387c6'}
          tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
          ref={tabView => {
            this.tabView = tabView;
          }}
        >
          <ShowQuestions
            navigation={this.props.navigation}
            data={this.state.data}
            tabLabel="Newest"
          />
          <ShowQuestions
            navigation={this.props.navigation}
            data={this.state.data}
            tabLabel="Unsolved"
          />
        </ScrollableTabView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  styleHeader: {
    backgroundColor: '#5387c6',
    shadowColor: '#fff',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    },
    elevation: 0
  }
});

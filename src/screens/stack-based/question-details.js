import React, { Component, Fragment } from 'react';
import { StatusBar, Platform, Dimensions } from 'react-native';
import { ButtonIcon } from '../../components/common/button-icon';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Header } from '../../components/header/header-layout';
import { ButtonBack } from '../../components/header/button-back';
import DetailsView from '../../components/posts/details-view';
import { Icon } from 'react-native-elements';
const { width } = Dimensions.get('window');
import { Avatar } from '../../components/common/avatar';
import { apiQuestions } from '../../common/api/api-questions';
import Loading from '../../components/common/loading';
import CommentScreen from '../../components/comments/comment-screen';
import AnswerScreen from '../../components/questions/answer-screen';
import { Colors } from '../../common/colors';
export default class QuestionDetials extends Component {
  static navigationOptions = () => {
    return {
      header: null,
      headerMode: 'screen'
    };
  };
  constructor(props) {
    super(props);
    const { hash_id } = this.props.navigation.state.params.value;
    this.state = {
      question: null,
      answers: []
    };
    apiQuestions
      .getQuestion(hash_id)
      .then(r => {
        console.log(r);
        this.setState({ question: r.question.data, answers: r.answers.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.props.navigation.state.params.value;
    const { avatar, name, username, id } = user.data;
    const { question, answers } = this.state;
    if (!question) {
      return <Loading />;
    }
    let valueUser = {
      id: id,
      avatar: avatar[0],
      name: name,
      username: username
    };
    return (
      <Fragment>
        <StatusBar
          backgroundColor={Colors.STRONG_CYAN}
          barStyle="light-content"
        />
        <Header
          noMarginTop={Platform.OS === 'android'}
          title={
            <Avatar {...this.props} style={{ flex: 1 }} value={valueUser} />
          }
          style={{ width: width, marginTop: Platform.OS === 'ios' ? 20 : 0 }}
          headerLeft={
            <ButtonBack
              onPress={() => {
                this.props.navigation.goBack();
              }}
              color={Colors.WHITE}
            />
          }
          headerRight={
            <ButtonIcon
              extraElement={
                <Icon
                  name="share-variant"
                  type="material-community"
                  color={Colors.WHITE}
                  style={{ paddingLeft: 5 }}
                />
              }
              onPress={() => {}}
            />
          }
        />
        <ScrollableTabView
          style={{ backgroundColor: Colors.WHITE }}
          initialPage={0}
          // onChangeTab={({ i Ư}) => this.onChangeTab(i)}
          prerenderingSiblingsNumber={0}
          tabBarTextStyle={{ color: Colors.WHITE }}
          tabBarBackgroundColor={Colors.STRONG_CYAN}
          tabBarUnderlineStyle={{ backgroundColor: Colors.WHITE }}
          ref={tabView => {
            this.tabView = tabView;
          }}
        >
          <DetailsView
            data={question}
            {...this.props}
            tabLabel="Questions"
            noPost
          />
          <CommentScreen
            value={valueUser}
            {...this.props}
            tabLabel="Comments"
            comments={question.comments.data}
          />
          <AnswerScreen {...this.props} tabLabel="Answers" data={answers} />
        </ScrollableTabView>
      </Fragment>
    );
  }
}

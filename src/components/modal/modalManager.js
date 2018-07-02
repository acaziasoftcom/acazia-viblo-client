import React, { Component } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { Colors } from '../../common/colors';

const { width } = Dimensions.get('window');
export default class ModalManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.modalVisible ? this.props.modalVisible : false
    };
  }
  componentWillMount() {
    console.log('modal ', this.props.modalVisible);
    modalVisible = this.props.modalVisible;
    this.setState({
      modalVisible: modalVisible ? modalVisible : false
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      modalVisible: nextProps.modalVisible
    });
  }
  render() {
    let contentModal = this.props.contentModal;
    console.log('visible', this.props.modalVisible);
    return (
      <Modal
        animationType="none"
        transparent
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({
            modalVisible: false
          });
        }}
      >
        <TouchableWithoutFeedback
          onPress={() =>
            this.setState({
              modalVisible: false
            })
          }
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(15, 15, 15, 0.6)',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 40
            }}
          >
            <View
              style={{
                width: width * 0.72,
                paddingVertical: 20,
                paddingLeft: 10,
                justifyContent: 'center',
                backgroundColor: Colors.WHITE,
                borderRadius: 5
              }}
            >
              {contentModal}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

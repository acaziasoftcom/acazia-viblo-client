import React, { Component } from 'react';
import { Modal } from 'react-native';

export default class ModalManager extends Component {
  render() {
    let content = this.props.modalContent;
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.modaelVisisble}
      >
        {content}
      </Modal>
    );
  }
}

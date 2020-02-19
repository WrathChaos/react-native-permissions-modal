import React from "react";
import { Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
/**
 * ? Local Imports
 */
import styles from "./PermissionModal.style";
import PermissionItem from "../PermissionItem/PermissionItem";

export default class PermissionModal extends React.PureComponent {
  modal = React.createRef();

  openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  };

  closeModal = () => {
    if (this.modal.current) {
      this.modal.current.close();
    }
  };

  renderContent = () => {
    return (
      <View style={styles.content}>
        <View>
          <Text style={styles.content__heading}>Permissions</Text>
          <Text numberOfLines={3} style={styles.content__description}>
            Phasellus id scelerisque sem. Vivamus consequat leo turpis, vitae
            sagittis lacus efficitur eu.
          </Text>
        </View>
        <View>{this.props.children}</View>
      </View>
    );
  };

  render() {
    return (
      <Modalize ref={this.modal} adjustToContentHeight handlePosition="inside">
        {this.renderContent()}
      </Modalize>
    );
  }
}

import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
/**
 * ? Local Imports
 */
import styles from "./PermissionModal.style";

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
    const { title, subtitle } = this.props;
    return (
      <View style={styles.content}>
        <View>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text numberOfLines={3} style={styles.subtitleStyle}>
            {subtitle}
          </Text>
        </View>
        <View>{this.props.children}</View>
      </View>
    );
  };

  render() {
    return (
      <Modalize
        ref={this.modal}
        adjustToContentHeight
        handlePosition="inside"
        {...this.props}
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}

PermissionModal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

PermissionModal.defaultProps = {
  title: "Permissions",
  subtitle:
    "Phasellus id scelerisque sem. Vivamus consequat leo turpis, vitae sagittis lacus efficitur eu.Phasellus id scelerisque sem. Vivamus consequat leo turpis, vitae sagittis lacus efficitur eu."
};

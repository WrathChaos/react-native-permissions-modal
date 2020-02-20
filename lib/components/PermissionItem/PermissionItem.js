import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import Ripple from "react-native-material-ripple";
/**
 * ? Local Imports
 */
import styles, {
  _iconContainer,
  _iconStatusStyle
} from "./PermissionItem.style";

const chevronIcon = require("../../local-assets/chevron.png");

const PermissionItem = props => {
  const {
    title,
    source,
    subtitle,
    iconComponent,
    titleTextStyle,
    ImageComponent,
    iconStatusColor,
    subtitleTextStyle,
    iconContainerBackgroundColor
  } = props;
  return (
    <Ripple
      style={styles.container}
      rippleColor="gray"
      rippleDuration={750}
      rippleContainerBorderRadius={16}
      {...props}
    >
      <View style={_iconContainer(iconContainerBackgroundColor)}>
        {iconComponent || (
          <ImageComponent source={source} style={styles.iconStyle} />
        )}
        <View style={_iconStatusStyle(iconStatusColor)} />
      </View>
      <View style={styles.contextContainer}>
        <View style={styles.textContainer}>
          <Text style={titleTextStyle || styles.titleTextStyle}>{title}</Text>
          <Text style={subtitleTextStyle || styles.subtitleTextStyle}>
            {subtitle}
          </Text>
        </View>
        <ImageComponent source={chevronIcon} style={styles.chevronStyle} />
      </View>
    </Ripple>
  );
};

PermissionItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  example: PropTypes.number,
  iconStatusColor: PropTypes.string,
  iconContainerBackgroundColor: PropTypes.string
};

PermissionItem.defaultProps = {
  title: "Location",
  ImageComponent: Image,
  iconStatusColor: "green",
  iconContainerBackgroundColor: "#f7f7f7",
  source: require("../../local-assets/placeholder.png"),
  subtitle: "Give us the this permission to access full features"
};

export default PermissionItem;

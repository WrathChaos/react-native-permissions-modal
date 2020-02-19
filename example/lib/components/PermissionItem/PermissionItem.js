import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import Ripple from "react-native-material-ripple";
/**
 * ? Local Imports
 */
import styles from "./PermissionItem.style";

const PermissionItem = props => {
  const { ImageComponent } = props;
  return (
    <Ripple
      style={{
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
      rippleColor="gray"
      rippleDuration={750}
      rippleContainerBorderRadius={16}
    >
      <View
        style={{
          width: 35,
          height: 35,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f7f7f7"
        }}
      >
        <ImageComponent
          style={{ height: 15, width: 15 }}
          source={require("../../assets/placeholder.png")}
        />
        <View
          style={{
            top: 0,
            right: 0,
            width: 10,
            height: 10,
            borderRadius: 10,
            position: "absolute",
            backgroundColor: "green"
          }}
        />
      </View>
      <View style={{ margin: 12 }}>
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#6a6a6a" }}>
          Location
        </Text>
        <Text style={{ fontSize: 12, color: "#949494" }}>
          Give us the this permission to access full features
        </Text>
      </View>
    </Ripple>
  );
};

PermissionItem.propTypes = {
  example: PropTypes.number
};

PermissionItem.defaultProps = {
  ImageComponent: Image
};

export default PermissionItem;

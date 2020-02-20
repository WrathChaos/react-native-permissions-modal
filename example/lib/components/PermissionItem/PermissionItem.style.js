import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const _iconContainer = backgroundColor => ({
  width: 35,
  height: 35,
  backgroundColor,
  borderRadius: 18,
  alignItems: "center",
  justifyContent: "center"
});

export const _iconStatusStyle = backgroundColor => ({
  top: 0,
  right: 0,
  width: 10,
  height: 10,
  backgroundColor,
  borderRadius: 10,
  position: "absolute"
});

export default {
  container: {
    margin: 3,
    padding: 12,
    right: 16,
    flexDirection: "row"
  },
  iconStyle: {
    width: 15,
    height: 15
  },
  textContainer: {
    bottom: 3,
    marginLeft: 12,
    width: width * 0.7
  },
  titleTextStyle: {
    fontSize: 14,
    color: "#6a6a6a",
    fontWeight: "600"
  },
  subtitleTextStyle: {
    fontSize: 12,
    color: "#949494"
  },
  contextContainer: {
    alignItems: "center",
    flexDirection: "row"
  },
  chevronStyle: {
    width: 15,
    height: 15,
    marginLeft: 8
  }
};

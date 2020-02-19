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
    marginBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  iconStyle: {
    width: 15,
    height: 15
  },
  textContainer: {
    margin: 12
  },
  titleTextStyle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6a6a6a"
  },
  subtitleTextStyle: {
    fontSize: 12,
    color: "#949494"
  }
};

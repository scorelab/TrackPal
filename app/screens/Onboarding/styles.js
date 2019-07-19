import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: { height: "100%", width: "100%" },
  textStyle_1: {
    fontWeight: "bold",
    fontSize: 42,
    color: "white",
    position: "absolute", // child
    bottom: "30%", // position where you want
    left: 50,
    fontStyle: "italic",
    fontFamily: "Product Sans"
  },
  textStyle_2: {
    fontWeight: "bold",
    fontSize: 42,
    color: "white",
    position: "absolute", // child
    bottom: "25%", // position where you want
    left: 50,
    fontStyle: "italic",
    fontFamily: "Product Sans"
  },
  textStyle_3: {
    fontWeight: "bold",
    fontSize: 42,
    color: "white",
    position: "absolute", // child
    bottom: "20%", // position where you want
    left: 50,
    fontStyle: "italic",
    fontFamily: "Product Sans"
  },
  imageBackground: {
    height: "100%",
    width: "100%",
    position: "relative"
  },
  popMessage: {
    fontSize: 16,
    color: "black",
    paddingLeft: 50,
    fontFamily: "Product Sans",
    borderRadius: 50,
    backgroundColor: "white",
    width: 300,
    padding: 10
  },
  popMessageIcon: {
    marginTop: "78.5%",
    left: 75,
    zIndex: 1000
  },
  popMessageView: {
    position: "absolute", // child
    bottom: "50%", // position where you want
    left: 70
  }
});

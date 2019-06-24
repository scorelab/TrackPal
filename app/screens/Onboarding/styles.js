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
    fontStyle: "italic"
  },
  textStyle_2: {
    fontWeight: "bold",
    fontSize: 42,
    color: "white",
    position: "absolute", // child
    bottom: "25%", // position where you want
    left: 50,
    fontStyle: "italic"
  },
  textStyle_3: {
    fontWeight: "bold",
    fontSize: 42,
    color: "white",
    position: "absolute", // child
    bottom: "20%", // position where you want
    left: 50,
    fontStyle: "italic"
  },
  imageBackground: {
    height: "100%",
    width: "100%",
    position: "relative"
  }
});

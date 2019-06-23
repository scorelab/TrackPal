import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 680,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  shareLocationButton: {
    paddingBottom: deviceHeight * 0.2,
    marginTop: deviceHeight * 0.25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex:1
  },
  touchableText: {
    color: "blue",
    fontSize: 18
  },
  textContainer: {
    paddingTop: deviceHeight * 0.53,
    margin: 5
  },
  cancelShareLocationButton: {
    marginTop: deviceHeight * 0.27,
    alignItems: "center",
    backgroundColor: "red",
    padding: 15,
    margin: 10,
    borderRadius: 50
  },
  cancelText: {
    fontSize: 20
  }
});

import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default (styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: deviceHeight,
    width: deviceWidth,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  textContainer: {
    marginTop: deviceHeight * 0.7,
    margin: 20
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    height: 45,
    width: "100%",
    borderRadius: 50,
    backgroundColor: "white",
    color: "black",
    paddingLeft: 10,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 2,
    width: "90%",
    marginLeft: "5%",
    marginTop: "3%"
  },
  shareLocationButton: {
    backgroundColor: "#00aced",
    alignItems: "center",
    borderRadius: 50,
    width: "90%",
    marginLeft: "5%",
    marginTop: "5%"
  },
  touchableText: {
    color: "white",
    fontSize: 18,
    padding: 10
  },
  cancelLocationButton: {
    backgroundColor: "red",
    paddingBottom: 50,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 50
  },
  cardViewStyles: {
    backgroundColor: "white",
    borderRadius: 20,
    height: "100%"
  }
}));

import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;

export default (styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 625,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  textContainer: {
    paddingTop: "125%",
    margin: 20
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerPosition: {
    paddingBottom: 20,
    paddingLeft: deviceWidth / 2 - 90,
    marginTop: 10,
    borderRadius: 15,
    fontSize: 20,
    width: "100%",
    color: "#00aced"
  },
  textInput: {
    height: 45,
    width: "45%",
    borderRadius: 50,
    backgroundColor: "#e8e8e8",
    marginBottom: 15,
    color: "#FFF",
    paddingLeft: 10
  },
  shareLocationButton: {
    backgroundColor: "#00aced",
    paddingBottom: 50,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 50
  },
  touchableText: {
    color: "white",
    paddingTop: 13,
    fontSize: 18
  },
  cancelLocationButton: {
    backgroundColor: "red",
    paddingBottom: 50,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 50
  }
}));

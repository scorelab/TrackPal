import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
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
  shareLocationButton: {
    paddingBottom: deviceHeight * 0.3,
    marginTop: deviceHeight * 0.25,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flex: 1
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
  },
  rootView: {
    width: "95%",
    backgroundColor: "white",
    marginLeft: 10,
    borderRadius: 20,
    height: 200,
    borderColor: "rgba(0,0,0,0.02)",
    borderWidth: 5
  },
  child1: {
    flexDirection: "row",
    marginTop: "2%",
    marginLeft: "2%"
  },
  dpStyles: {
    margin: "5%",
    height: 55,
    width: 55,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "rgba(0,0,0,0.02)"
  },
  usernameStyle: {
    fontWeight: "900",
    fontSize: 16,
    color: "black"
  },
  moreIcon: { marginLeft: "18%", marginTop: "5%" },
  fromStyle: { fontWeight: "500", fontSize: 15 },
  toStyle: {
    fontWeight: "500",
    fontSize: 15,
    marginTop: "13%"
  },
  busRouteView: {
    marginTop: "5%",
    marginLeft: "35%",
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    height: "50%",
    width: "17%"
  },
  busRouteText: {
    fontSize: 24,
    fontWeight: "900",
    marginLeft: "20%",
    marginTop: "5%",
    color: "black"
  },
  trainNameView: {
    marginTop: "5%",
    marginLeft: "35%",
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    height: "60%",
    width: "25%"
  },
  trainNameText: {
    fontSize: 16,
    fontWeight: "900",
    marginLeft: "25%",
    marginTop: "5%",
    color: "black"
  },
  currentmarker: {
    height: 25,
    width: 25,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 2
  }
});

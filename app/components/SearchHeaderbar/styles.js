import { StyleSheet, Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  navigationBar: {
    backgroundColor: "#00aced",
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  leftIconContainer: {
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 5
  },
  rightIconContainer: {
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 5
  },
  titleArea: {
    width: deviceWidth * 0.9,
    alignItems: "center",
    flexDirection: 'row',
  },

  //Text

  titleFont: {
    fontSize: 18,
    color: "white"
  },

  filterText: {
    color: "white",
    marginTop: 12,
    fontSize: 20
  },
  input: {
    height: 45,
    width: deviceWidth * 0.7,
    borderRadius: 5,
    color: "black",
    paddingHorizontal: 10,
    borderColor: 'rgba(0,0,0,0.1)', 
    borderWidth: 1,
    marginLeft:20
  }
});

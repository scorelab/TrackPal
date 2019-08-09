import { StyleSheet, Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
    borderColor: "blue",
    borderWidth: 2
  },
  fontStyle: { fontSize: 24, fontWeight: "bold", color: "black" },
  scaleStyle: { marginTop: "10%", marginLeft: "10%" },
  opacityStyle: { marginTop: "10%", marginLeft: "70%" }
});

import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%"
  },
  scrollView: {
    width: "100%"
  },
  scrollViewContent: {
    alignItems: "center",
    paddingBottom: 10
  },
  iconStyle: {
    position: "absolute",
    marginTop: "150%",
    paddingLeft: "75%"
  },
  input: {
    height: 45,
    width: deviceWidth * 0.6,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginBottom: 15,
    color: "black",
    paddingHorizontal: 10
  },
  searchFilter: {
    backgroundColor: "#3c5898",
    height: 50,
    width: 150,
    alignItems: "center",
    marginLeft: 50,
    borderRadius: 50
  },
  filterText: {
    color: "white",
    marginTop: 12,
    fontSize: 20
  },
  feedText: {
    fontSize: 30,
    marginRight: deviceWidth * 0.6,
    padding: 10,
    fontWeight: "bold",
    color: "black"
  },
  shareLocationTouchableScale: {
    position: "absolute",
    marginTop: deviceWidth*1.57,
    zIndex: 1
  },
  shareLocationImage:{
    height: 70,
    width: 70,
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 10,
    borderRadius: 50
  }
});

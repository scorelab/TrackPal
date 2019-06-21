import { StyleSheet, Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: "88%",
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 210,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10
  },
  cardHedear: {
    marginTop: 10,
    marginRight: 7,
    height: 80
  },
  userDetailArea: {
    flex: 0.9,
    paddingLeft: 8,
    flexDirection: "column"
  },
  userNameRow: {
    flex: 0.4,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  meaasageRow: {
    marginTop: deviceHeight * 0.15,
    flexDirection: "row"
  },
  headerRow: {
    flexDirection: "row"
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  badgeCount: {
    backgroundColor: "#3d9bf9",
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    right: 10
  },
  imageThumbnails: {
    height: 70,
    width: 70,
    borderRadius: 35
  },
  detailRow: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    marginTop: 10
  },
  thumbnailRow: {
    flex: 1,
    width: "100%",
    // backgroundColor:'red',
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30
  },

  //Font styles

  nameText: {
    fontSize: 16,
    color: "#4e5861",
    fontWeight: "bold"
  },
  meaasageText: {
    fontSize: 16,
    color: "#95a3ad"
  },
  paraText: {
    fontSize: 16,
    color: "#555f68"
  },
  countText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },
  routeNameText: {
    fontSize: 20,
    color: "#4e5861",
    fontWeight: "bold"
  },
  mapStyle: { height: 100, width: 345, borderRadius: 10 },

  coulumnStyle: {
    width: deviceWidth / 3.6,
    height: 50
  },
  sharedUserImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "blue",
    marginLeft: 70
  },
  CustomIconStyle_1: { marginTop: 2, marginLeft: 10, color: "black" },
  textStyle_1: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 5,
    marginLeft: 5,
    color: "black"
  },
  textStyle_2: { marginTop: 5, fontWeight: "bold" },
  viewStyle_1: {
    flexDirection: "row",
    borderColor: "rgba(0,0,0,0.1115)",
    borderWidth: 1,
    borderRadius: 5
  },
});

import { StyleSheet, Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deveiceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  firstContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  container2: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 30,
    marginTop: deveiceHeight / 12
  },
  container3: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20
  },
  scrollStyle: {
    flex: 1
  },
  input: {
    height: 45,
    width: deviceWidth * 0.8,
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 15,
    color: "black",
    paddingHorizontal: 10
  },
  containerNew: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 50,
    padding: 50
  },
  loginTouchableOpacity: {
    alignItems: "center",
    backgroundColor: "#3c5898",
    padding: 15,
    margin: 10,
    borderRadius: 50,
    width: 150
  },
  loginText: {
    fontSize: 16,
    color: "white"
  },
  text: {
    color: "black",
    fontSize: 16,
    color:"#3c5898",
  },
  container4:{
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 25
  },
  logo: {
      width: 250,
      height: 100,

  },
  orText:{
    color: "black",
    fontSize: 24
  }
});

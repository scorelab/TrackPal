import { StyleSheet, Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deveiceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  firstContainer: {
    flex: 1,
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 200
  },
  container2: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "7%",
    marginTop: "20%"
  },
  container3: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollStyle: {
    flex: 1
  },
  input: {
    height: 60,
    width: "100%",
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginBottom: 15,
    color: "white",
    paddingHorizontal: 10,
    borderColor: "#fff",
    textAlign: "center",
    borderWidth: 1
  },
  containerNew: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "30%"
  },
  loginTouchableOpacity: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 22,
    borderRadius: 50,
    width: 330,
    height: 60
  },
  loginText: {
    fontSize: 16,
    color: "black"
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold"
  },
  container4: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 25
  },
  logo: {
    width: "100%",
    height: 100,
    marginTop: "30%"
  },
  privacyText: {
    color: "white"
  }
});

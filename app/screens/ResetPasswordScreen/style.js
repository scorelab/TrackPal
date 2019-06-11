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
    justifyContent: "flex-start"
  },
  container2: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 30,
    marginTop: deveiceHeight / 5
  },
  container3: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 85
  },
  scrollStyle: {
    flex: 1
  },
  input: {
    height: 60,
    width: deviceWidth * 0.8,
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
    borderRadius: 50,
  },
  resetTouchableOpacity: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 22,
    borderRadius: 50,
    width: 330,
    height: 60,
    marginTop: 10
  },
  resetText: {
    fontSize: 16,
    color: "black"
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  container4: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 25
  },
  logo: {
    width: "100%",
    height: 100
  }
});

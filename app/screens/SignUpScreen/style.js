import { StyleSheet, Dimensions } from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deveiceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  firstContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },

  scrollStyle: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150
  },
  logo: {
    width: 100,
    height: 100
  },
  formContainer: {
    paddingTop: 20,
    borderRadius: 50,
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
  signInButton: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 22,
    borderRadius: 50,
    width: 330,
    height: 60,
    marginTop: 10
  },
  buttonText: {
    fontSize: 16,
    color: "black"
  },
  logo: {
    width: "100%",
    height: 100
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  signInTextArea: {
    alignItems: "center",
    marginTop: 25
  },
  privacyText: {
    color: "white",
  }
});

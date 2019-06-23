import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import { SocialIcon } from "react-native-elements";
import styles from "./style.js";
import { WaveIndicator } from "react-native-indicators";
import { f } from "../../../config/config.js";

export default class LandingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpinner: true
    };
  }

  componentDidMount() {
    this.fireBaseListener = f.auth().onAuthStateChanged(auth => {
      if (auth) {
        this.firebaseRef = f.database().ref("users");
        this.firebaseRef.child(auth.uid).on("value", snap => {
          const user = snap.val();
          if (user != null) {
            this.firebaseRef.child(auth.uid).off("value");

            this.props.navigation.navigate("App");
          } else {
            this.props.navigation.navigate("Login");
          }
        });
      } else {
        this.setState({ showSpinner: false });
      }
    });
  }
  render() {
    return (
      <ImageBackground
        source={require("../../images/landing.jpg")}
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
        <View style={styles.firstContainer}>
          <ScrollView style={styles.scrollStyle}>
            <View style={styles.container2}>
              <Text>Logo Goes Here</Text>
              <WaveIndicator color="black" style={styles.indicator} />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

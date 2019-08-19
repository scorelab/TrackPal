import React, { Component } from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import styles from "./style.js";
import { WaveIndicator } from "react-native-indicators";

export default class LandingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpinner: true
    };
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

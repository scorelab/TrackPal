import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import styles from "./styles.js";

export default class OnboardingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Onboarding
          onSkip={() => this.props.navigation.navigate("App")}
          onDone={() => this.props.navigation.navigate("App")}
          pages={[
            {
              backgroundColor: "#fff",
              image: (
                <View style={styles.container}>
                  <ImageBackground
                    style={styles.imageBackground}
                    source={require("../../images/bg-img-onboarding-1.png")}
                  >
                    <Text style={styles.textStyle_1}>Get to know</Text>
                    <Text style={styles.textStyle_2}>before you</Text>
                    <Text style={styles.textStyle_3}>Go</Text>
                  </ImageBackground>
                </View>
              )
            },
            {
              backgroundColor: "#fff",
              image: (
                <View style={styles.container}>
                  <ImageBackground
                    style={styles.imageBackground}
                    source={require("../../images/bg-img-onboarding-2.png")}
                  >
                    <Text style={styles.textStyle_1}>Never Miss</Text>
                    <Text style={styles.textStyle_2}>your commute</Text>
                    <Text style={styles.textStyle_3}>Again</Text>
                  </ImageBackground>
                </View>
              )
            },
            {
              backgroundColor: "#fff",
              image: (
                <View style={styles.container}>
                  <ImageBackground
                    style={styles.imageBackground}
                    source={require("../../images/bg-img-onboarding-3.png")}
                  >
                    <Text style={styles.textStyle_1}>Track Realtime</Text>
                    <Text style={styles.textStyle_2}>where your</Text>
                    <Text style={styles.textStyle_3}>commute is</Text>
                  </ImageBackground>
                </View>
              )
            }
          ]}
        />
      </View>
    );
  }
}

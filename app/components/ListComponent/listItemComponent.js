import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default class CardView extends Component {
  render() {
    return (
      <View style={styles.cardContainer} elevation={5}>
        <TouchableOpacity
          style={styles.cardHedear}
          onPress={this.props.onPress}
        >
          <View style={styles.userDetailArea}>
            <View style={{ flex: 0.2 }}>
              <Image
                style={styles.mapStyle}
                source={require("../../images/landing.jpg")}
              />
            </View>

            <View style={styles.meaasageRow}>
              <View
                style={{
                  width: 115,
                  height: 50,
                  backgroundColor: "powderblue"
                }}
              >
                <Text>{this.props.from}</Text>
                <Text>{this.props.to}</Text>
              </View>
              <View
                style={{ width: 115, height: 50, backgroundColor: "skyblue" }}
              >
                <Text>{this.props.posted}</Text>
              </View>
              <View
                style={{ width: 115, height: 50, backgroundColor: "steelblue" }}
              >
                <Text>{this.props.userID}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

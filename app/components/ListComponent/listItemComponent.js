import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { Rating } from "react-native-elements";

export default class CardView extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.cardHedear}
          onPress={this.props.onPress}
        >
          <View style={styles.userDetailArea}>
            <View style={styles.userNameRow}>
              <Text style={styles.routeNameText}>{this.props.posted}</Text>
            </View>
            <View style={{ flex: 0.25 }}>
              <Image
                style={{ height: 130, width: 310, marginTop: 25 }}
                source={require("../../images/landing.jpg")}
              />
            </View>

            <View style={styles.meaasageRow}>
              <View style={styles.headerRow}>
                <Text style={styles.nameText}>{this.props.name}</Text>
                <Rating imageSize={15} startingValue={4} style={{marginLeft: 80}}/>
              </View>
              <Text style={styles.meaasageText}>{this.props.message}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles.js";

import Ionicons from "react-native-vector-icons/AntDesign";

export default class HeaderNavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.navigationBar}>
        {this.props.backIcon && (
          <Ionicons
            name="arrowleft"
            size={25}
            color="white"
          />
        )}
        <View style={styles.titleArea}>
          <Text style={styles.titleFont}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

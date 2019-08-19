import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import { database, f } from "../../../config/config.js";
import TouchableScale from "react-native-touchable-scale";

export default class SideNavigation extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dp: null
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    var currentUser = f.auth().currentUser;

    var that = this;
    if (currentUser !== null) {
      database
        .ref("/users")
        .child(currentUser.uid)
        .once("value", function(data) {
          that.setState({
            dp: data.val().dp
          });
        });
    }
  }

  render() {
    const { dp } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginTop: "15%", marginLeft: "5%" }}>
            {dp !== null ? (
              <Image style={styles.profileImage} source={{ uri: dp }} />
            ) : (
              <Image
                style={styles.profileImage}
                source={require("../../images/user_image_1.jpg")}
              />
            )}
          </View>
          <View>
            <TouchableOpacity style={styles.opacityStyle}>
              <Text style={{ fontSize: 24, color: "black" }}>X</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableScale style={styles.scaleStyle}>
          <Text style={styles.fontStyle}>Profile</Text>
        </TouchableScale>

        <TouchableScale style={styles.scaleStyle}>
          <Text style={styles.fontStyle}>Map</Text>
        </TouchableScale>

        <TouchableScale style={styles.scaleStyle}>
          <Text style={styles.fontStyle}>Your Routes</Text>
        </TouchableScale>

        <TouchableScale style={styles.scaleStyle}>
          <Text style={styles.fontStyle}>History</Text>
        </TouchableScale>

        <TouchableScale style={styles.scaleStyle}>
          <Text style={styles.fontStyle}>Settings</Text>
        </TouchableScale>
      </View>
    );
  }
}

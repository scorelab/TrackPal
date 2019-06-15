import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import styles from "./style";
import CustomIcon from "../../../resources/customIcon.js";
import { f, database } from "../../../config/config.js";

export default class CardView extends Component {
  state = {
    dp: null
  };

  componentDidMount() {
    userID = this.props.userID;
    var that = this;

    database
      .ref("/users")
      .child(userID)
      .once("value", function(data) {
        that.setState({ dp: data.val().dp });
      });
  }

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
                  height: 50
                }}
              >
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <View style={{ width: 10 }}>
                    <Image
                      source={require("../../images/location-points.png")}
                      style={{ height: 50, width: 10 }}
                    />
                  </View>
                  <View style={{ style: 100, marginLeft: 5 }}>
                    <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                      {this.props.from}
                    </Text>
                    <Text style={{ marginTop: 5, fontWeight: "bold" }}>
                      {this.props.to}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ width: 115, height: 50 }}>
                <View
                  style={{
                    flexDirection: "row",
                    borderColor: "rgba(0,0,0,0.1115)",
                    borderWidth: 1,
                    borderRadius: 5
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                      marginRight: 15,
                      marginLeft: 5,
                      color: "black"
                    }}
                  >
                    {this.props.posted}
                  </Text>
                  <CustomIcon
                    name={this.props.screen}
                    style={{ marginTop: 7, marginLeft: 60, color: "black" }}
                  />
                </View>
              </View>
              <View style={{ width: 115, height: 50 }}>
                {this.state.dp !== null ? (
                  <Image
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                      borderWidth: 2,
                      borderColor: "blue",
                      marginLeft: 70
                    }}
                    source={{ uri: this.state.dp }}
                  />
                ) : (
                  <ActivityIndicator />
                )}
                <Text style={{marginLeft: 78}}>User</Text>
                <Text style={{marginLeft: 8}}>Starting 3 min ago</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

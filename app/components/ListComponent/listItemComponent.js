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
              <View style={styles.coulumnStyle}>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <View style={{ width: 10 }}>
                    <Image
                      source={require("../../images/location-points.png")}
                      style={{ height: 50, width: 10 }}
                    />
                  </View>
                  <View style={{ style: 100, marginLeft: 5 }}>
                    <Text style={styles.textStyle_2}>{this.props.from}</Text>
                    <Text style={styles.textStyle_2}>{this.props.to}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.coulumnStyle}>
                <View style={styles.viewStyle_1}>
                  <View style={{width:80}}>
                  <Text style={styles.textStyle_1}>{this.props.posted}</Text>
                  </View>
                  <View style={{width:30}}>
                  <CustomIcon
                    name={this.props.screen}
                    style={styles.CustomIconStyle_1}
                  />
                  </View>
                </View>
              </View>
              <View style={styles.coulumnStyle}>
                {this.state.dp !== null ? (
                  <Image
                    style={styles.sharedUserImage}
                    source={{ uri: this.state.dp }}
                  />
                ) : (
                  <ActivityIndicator />
                )}
                <Text style={{ marginLeft: 78 }}>User</Text>
                <Text style={{ marginLeft: 8 }}>Starting 3 min ago</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

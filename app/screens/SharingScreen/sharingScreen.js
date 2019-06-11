import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import HeaderBar from "../../components/HeaderBar/headerBar.js";
import { Rating, Card, Button } from "react-native-elements";
import geolib from "geolib";
import styles from "./styles";

import { database, f } from "../../../config/config.js";

export default class MapScreen extends Component {
  state = {
    uid: null,
    current: null,
    from: null,
    to: null,
    region: null,
    rating: 0,
    count: 0
  };

  componentDidMount() {
    var userId = this.props.navigation.state.params.userKey;
    const prevScreen = this.props.navigation.state.params.prevScreen; // to detect what is the previous screen
    var currentUser = this.getCurrentUser();

    if (this.state.uid == null) {
      this.setState({
        uid: userId
      });
    }

    if (userId !== null) {
      var that = this;
      if (prevScreen === "BusScreen") {
        // if the get method is called from bus screen
        var db = database.ref("/BusDetails/" + userId);

        db.on("value", function(snapshot) {
          that.setState({
            current: snapshot.val().current,
            from: snapshot.val().from,
            to: snapshot.val().to
          });

          if (that.state.to !== null) {
            that._isArrievedToLocation();
          }
        });
        // sharing person and the viewer is same
        if (currentUser === userId) {
          navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
              this.setState({
                region: {
                  latitude,
                  longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }
              });
              this.updateUserLocation("BusDetails", currentUser); // reload the current location and set it in the firebase when location is changing
            }, // success
            error => {
              console.log(error);
            }, //error
            {
              timeout: 2000,
              enableHighAccuracy: true,
              maximumAge: 10000
            }
          );
        }
      } else if (prevScreen === "TrainScreen") {
        var db = database.ref("/TrainDetails/" + userId);

        db.on("value", function(snapshot) {
          that.setState({
            current: snapshot.val().current,
            from: snapshot.val().from,
            to: snapshot.val().to
          });

          if (that.state.to !== null) {
            that._isArrievedToLocation();
          }
        });
        // sharing person and the viewer is same
        if (currentUser === userId) {
          navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
              this.setState({
                region: {
                  latitude,
                  longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }
              });
              this.updateUserLocation("TrainDetails", currentUser); // reload the current location and set it in the firebase when location is changing
            }, // success
            error => {
              console.log(error);
            }, //error
            {
              timeout: 2000,
              enableHighAccuracy: true,
              maximumAge: 10000
            }
          );
        }
      }
    }
  }

  getCurrentUser() {
    var currentUser = f.auth().currentUser;

    var that = this;
    database
      .ref("/users")
      .child(currentUser.uid)
      .once("value", function(data) {
        that.setState({
          rating: data.val().ratings,
          count: data.val().numOfChcances
        });
      });

    return currentUser.uid;
  }

  cancelSharing() {
    var userID = this.state.uid;
    const prevScreen = this.props.navigation.state.params.prevScreen; // to detect what is the previous screen
    var that = this;
    this.setState({ current: null });

    if (prevScreen === "BusScreen") {
      // if the sharing is called from bus screen
      const sharableObject = {
        to: this.state.to,
        from: this.state.from,
        routeNo: null,
        finished: true,
        current: this.state.current
      };

      database
        .ref("/BusDetails")
        .child(userID)
        .set(sharableObject)
        .then(that.props.navigation.goBack())
        .catch(err => console.log("Can't share the location in Bus"));
    } else if (prevScreen === "TrainScreen") {
      const sharableObject = {
        to: this.state.to,
        from: this.state.from,
        trainName: null,
        finished: true,
        current: this.state.current
      };

      database
        .ref("/TrainDetails")
        .child(userID)
        .set(sharableObject)
        .then(that.props.navigation.goBack())
        .catch(err => console.log("Can't share the location in Train"));
    }
  }

  getDistanceFromLocations(start, end) {
    return geolib.getDistance(
      { latitude: start.latitude, longitude: start.longitude },
      { latitude: end.latitude, longitude: end.longitude }
    );
  }

  _isArrievedToLocation() {
    const { to, current } = this.state;
    var distance = this.getDistanceFromLocations(current, to);
    if (distance < 20) {
      this.cancelSharing();
    }
  }

  updateRatings(newRateValue) {
    const { uid, rating, count } = this.state;

    const newCount = count + 1;
    const newRating = (rating * count + newRateValue) / newCount;
    database
      .ref("/users")
      .child(uid)
      .update({
        ratings: newRating,
        numOfChcances: newCount
      });
  }

  updateUserLocation(screen, userName) {
    const { from, to, region } = this.state;
    const sharableObject = {
      to: to,
      from: from,
      finished: false,
      current: region
    };

    var that = this;
    database
      .ref("/" + screen)
      .child(userName)
      .set(sharableObject)
      .then(that.setState({ shared: false }))
      .catch(err => console.log("Can't share the location in Bus"));
  }

  render() {
    const { uid, current, from, to } = this.state;
    return (
      <View>
        <View style={styles.container}>
          {this.state.current !== null ? (
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={current}
              loadingEnabled
              showsUserLocation
            >
              <Marker coordinate={from} />
              <Marker coordinate={to} />
            </MapView>
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </View>
        <HeaderBar title={"View Shared Location"} backIcon={true} />

        <View style={styles.textContainer}>
          {uid !== null && this.getCurrentUser() === uid ? ( // if the shared person is current user
            <View>
              <TouchableOpacity
                style={styles.cancelShareLocationButton}
                onPress={() => this.cancelSharing()}
              >
                <Text style={styles.cancelText}> Cancel Sharing </Text>
              </TouchableOpacity>
            </View>
          ) : (
            // id the shared person is another person rather than current user
            <View style={styles.shareLocationButton}>
              <View style={{ width: "10%", paddingLeft: 20, paddingTop: 20 }}>
                <Image
                  source={require("../../images/user_image_1.jpg")}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 50
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={{ width: "80%" }}>
                <Text style={{ paddingLeft: 50, paddingTop: 20 }}>
                  The idea with React Native Elements is more about component
                  structure than actual design.
                </Text>

                <Rating
                  imageSize={30}
                  startingValue={this.state.rating}
                  onFinishRating={num => this.updateRatings(num)}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

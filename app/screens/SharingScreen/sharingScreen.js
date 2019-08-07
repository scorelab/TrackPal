import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import geolib from "geolib";
import styles from "./styles";
import Icons from "react-native-vector-icons/MaterialIcons";
import { database, f } from "../../../config/config.js";
import TouchableScale from "react-native-touchable-scale";

export default class MapScreen extends Component {
  state = {
    uid: null,
    current: null,
    from: null,
    to: null,
    region: null,
    rating: 0,
    count: 0,
    mine: null,
    name: "Annonymous User",
    dp: null,
    routeNo: null,
    trainName: null,
    prevScreen: "",
    expanded: false
  };

  componentDidMount() {
    var userId = this.props.navigation.state.params.userKey;
    const prevScreen = this.props.navigation.state.params.prevScreen; // to detect what is the previous screen
    var currentUser = this.getCurrentUser();

    if (this.state.uid == null) {
      this.setState({
        uid: userId,
        prevScreen: prevScreen
      });
      this.getSharedUserDetails(userId);
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
            to: snapshot.val().to,
            routeNo: snapshot.val().routeNo
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
            to: snapshot.val().to,
            trainName: snapshot.val().trainName
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

  getSharedUserDetails(userId) {
    var that = this;
    database
      .ref("/users")
      .child(userId)
      .once("value", function(data) {
        that.setState({
          name: data.val().first_name,
          dp: data.val().dp
        });
      });
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

  fitCoordinates = () => {
    const { current, to, from } = this.state;

    if (to !== null && from !== null) {
      this.map.fitToCoordinates([current, from, to], {
        edgePadding: { top: 100, right: 100, bottom: 700, left: 100 },
        animated: true
      });
    }
  };

  render() {
    const { uid, current, from, to, region, routeNo, trainName } = this.state;
    const { name, dp, prevScreen } = this.state;
    return (
      <View>
        <View style={styles.container}>
          {this.state.current !== null ? (
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={region}
              loadingEnabled
              showsUserLocation
              ref={ref => {
                this.map = ref;
              }}
              onLayout={() => this.fitCoordinates()}
            >
              <Marker coordinate={from} />
              <Marker coordinate={current}>
                <Image source={{ uri: dp }} style={styles.currentmarker} />
              </Marker>
              <Marker coordinate={to} />
            </MapView>
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
          {this.state.current !== null ? (
            <View style={styles.textContainer}>
              <TouchableOpacity
                style={{ marginBottom: "75%", marginLeft: "90%" }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Icons name="cancel" size={26} />
              </TouchableOpacity>

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
                  {this.state.prevScreen !== null &&
                  this.state.prevScreen === "BusScreen" ? (
                    <TouchableScale>
                      <View style={styles.rootView}>
                        <View style={styles.child1}>
                          <Image
                            source={{ uri: dp }}
                            style={styles.dpStyles}
                            resizeMode="cover"
                          />
                          <View style={{ marginTop: "7%" }}>
                            <Text style={styles.usernameStyle}>{name}</Text>
                            <Text>started 10 min ago . for 20 more</Text>
                          </View>
                          <View style={styles.moreIcon}>
                            <Icons name="more-vert" size={25} />
                          </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ marginLeft: "9%" }}>
                            <Image
                              source={require("../../images/location-points.png")}
                              style={{ height: 70, width: 20 }}
                            />
                          </View>
                          <View style={{ marginTop: "3%", marginLeft: "1%" }}>
                            <Text style={styles.fromStyle}>{from.title2}</Text>
                            <Text style={styles.toStyle}>{to.title1}</Text>
                            <Text style={{ fontSize: 11 }}>Arrive 4.30pm</Text>
                          </View>
                          <View style={styles.busRouteView}>
                            <Text style={styles.busRouteText}>{routeNo}</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableScale>
                  ) : (
                    <TouchableScale>
                      <View style={styles.rootView}>
                        <View style={styles.child1}>
                          <Image
                            source={{ uri: dp }}
                            style={styles.dpStyles}
                            resizeMode="cover"
                          />
                          <View style={{ marginTop: "7%" }}>
                            <Text style={styles.usernameStyle}>{name}</Text>
                            <Text>started 10 min ago . for 20 more</Text>
                          </View>
                          <View style={styles.moreIcon}>
                            <Icons name="more-vert" size={25} />
                          </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ marginLeft: "9%" }}>
                            <Image
                              source={require("../../images/location-points.png")}
                              style={{ height: 70, width: 20 }}
                            />
                          </View>
                          <View style={{ marginTop: "3%", marginLeft: "1%" }}>
                            <Text style={styles.fromStyle}>{from.title2}</Text>
                            <Text style={styles.toStyle}>{to.title1}</Text>
                            <Text style={{ fontSize: 11 }}>Arrive 4.30pm</Text>
                          </View>
                          <View style={styles.trainNameView}>
                            <Text style={styles.trainNameText}>
                              {trainName}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableScale>
                  )}
                </View>
              )}
            </View>
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </View>
      </View>
    );
  }
}

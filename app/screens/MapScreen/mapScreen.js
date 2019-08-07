import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { f, database } from "../../../config/config.js";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import SearchTo from "../../components/GetToLocation/searchView.js";
import SearchFrom from "../../components/GetFromLocation/searchView.js";
import HeaderBar from "../../components/HeaderBar/headerBar.js";

import styles from "./styles";

export default class MapScreen extends Component {
  state = {
    region: null,
    from: null,
    to: null,
    routeNo: null,
    userName: null,
    shared: true,
    trainName: null,
    destination: null
  };

  async componentDidMount() {
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
        this.shareLocation; // reload the current location and set it in the firebase when location is changing
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

    var that = this;
    f.auth().onAuthStateChanged(auth => {
      that.setState({
        userName: auth.uid
      });
    });
  }

  componentDidUpdate() {
    console.log("inside component did update");
    this.fitCoordinates();
  }

  getFromLocation = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude }
    } = geometry;
    this.setState({
      from: {
        latitude,
        longitude,
        title1: data.structured_formatting.main_text
      }
    });
  };

  getToLocation = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude }
    } = geometry;
    this.setState({
      to: {
        latitude,
        longitude,
        title2: data.structured_formatting.main_text
      },
      destination: data.structured_formatting.main_text
    });
  };

  shareLocation = () => {
    var currentUser = f.auth().currentUser;

    if (currentUser === null) {
      alert("Sorry!, You are not a registered User! Please Register First.");
      this.props.navigation.navigate("Login");
    } else {
      const prevScreen = this.props.navigation.state.params.prevScreen;

      if (prevScreen === "BusScreen") {
        const { region, from, to, routeNo, userName, destination } = this.state;
        if (from !== null && to !== null && routeNo !== null) {
          if (region !== null) {
            if (isNaN(routeNo)) {
              alert("Please enter a valid Route Number...");
            } else {
              const sharableObject = {
                to: from,
                from: to,
                routeNo: routeNo,
                finished: false,
                current: region,
                destination: destination
              };

              var that = this;
              database
                .ref("/BusDetails")
                .child(userName)
                .set(sharableObject)
                .then(that.setState({ shared: false }))
                .catch(err => console.log("Can't share the location in Bus"));
            }
          } else {
            alert(
              "Please refresh the app or turn on location sharing in your mobile"
            );
          }
        } else {
          alert(
            "Please check the input fields, One of them or some of them are not correct!"
          );
        }
      } else if (prevScreen === "TrainScreen") {
        const {
          region,
          from,
          to,
          trainName,
          userName,
          destination
        } = this.state;

        if (from !== null && to !== null && trainName !== null) {
          if (region !== null) {
            const sharableObject = {
              to: from,
              from: to,
              trainName: trainName,
              finished: false,
              current: region,
              destination: destination
            };

            var that = this;
            database
              .ref("/TrainDetails")
              .child(userName)
              .set(sharableObject)
              .then(that.setState({ shared: false }))
              .catch(err => console.log("Can't share the location in Train"));
          } else {
            alert(
              "Please refresh the app or turn on location sharing in your mobile"
            );
          }
        }
      }
    }
  };

  fitCoordinates = () => {
    const { region, from, to } = this.state;

    if ( to !== null && from !== null ) {
      this.map.fitToCoordinates([region, from, to], {
        edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
        animated: true
      });
    }
  }

  render() {
    const { region, from, to } = this.state;
    const prevScreen = this.props.navigation.state.params.prevScreen;

    return (
      <View>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={region}
            showsUserLocation
            loadingEnabled
            ref={ref => {
              this.map = ref;
            }}
          >
            {from && <Marker coordinate={from} />}
            {to && <Marker coordinate={to} />}
          </MapView>
        </View>
        <HeaderBar title={"Share Your Location"} backIcon={true} />

        <View style={styles.textContainer}>
          {prevScreen === "BusScreen" ? (
            <TextInput
              placeholder="Bus Route Number"
              placeholderTextColor="#000"
              style={{
                height: 45,
                width: "100%",
                borderRadius: 50,
                backgroundColor: "#e8e8e8",
                marginBottom: 15,
                color: "black",
                paddingLeft: 10,
                marginTop: 50
              }}
              onChangeText={text => this.setState({ routeNo: text })}
            />
          ) : (
            <TextInput
              placeholder="Train Name"
              placeholderTextColor="#000"
              style={{
                height: 45,
                width: "100%",
                borderRadius: 50,
                backgroundColor: "#e8e8e8",
                marginBottom: 15,
                color: "#FFF",
                paddingLeft: 10,
                marginTop: 50
              }}
              onChangeText={text => this.setState({ trainName: text })}
            />
          )}

          {this.state.shared == true ? (
            <TouchableOpacity
              style={styles.shareLocationButton}
              onPress={this.shareLocation}
            >
              <Text style={styles.touchableText}>Share Location</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.cancelLocationButton}>
              <Text style={styles.touchableText}>Cancel Sharing</Text>
            </TouchableOpacity>
          )}
        </View>
        {this.state.shared && (
          <SearchFrom onLocationSelected={this.getFromLocation} />
        )}

        {this.state.shared && (
          <SearchTo onLocationSelected={this.getToLocation} />
        )}
      </View>
    );
  }
}

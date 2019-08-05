import React, { Component } from "react";
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import SearchHeaderBar from "../../components/SearchHeaderbar/searchHeaderbar.js";
import ListItems from "../../components/ListComponent/listItemComponent.js";
import styles from "./style.js";

import { f, database } from "../../../config/config.js";

export default class TrainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objects: null,
      indicator: true,
      currentUserID: null,
      isModalVisible: false,
      filterKey: ""
    };
  }

  componentDidMount() {
    var that = this;
    database.ref("/TrainDetails").on("value", function(snapshot) {
      that.setState({
        objects: snapshotToArray(snapshot),
        indicator: false
      });
    });

    var user = f.auth().currentUser;
    if (user !== null) {
      this.setState({
        currentUserID: user.uid
      });
    }
  }

  // method to redirect user for sharing screen
  redirectUserToSharingScreen(objectKey) {
    var currentUser = f.auth().currentUser;

    if (currentUser === null) {
      alert("Sorry!, You are not a registered User! Please Register First.");
      this.props.navigation.navigate("Login");
    } else {
      this.props.navigation.navigate("SharingLocation", {
        userKey: objectKey,
        prevScreen: "TrainScreen"
      });
    }
  }

  // method to search the list by the destination
  searchByTheDestination() {
    var destination = this.state.filterKey;

    if (destination !== null || destination !== "") {
      var that = this;

      this.setState({ indicator: true });

      database
        .ref("/TrainDetails")
        .orderByChild("destination")
        .equalTo(destination)
        .on("value", function(snapshot) {
          that.setState({
            objects: snapshotToArray(snapshot),
            indicator: false
          });
        });
    } else {
      var that = this;

      database.ref("/TrainDetails").on("value", function(snapshot) {
        that.setState({
          objects: snapshotToArray(snapshot),
          indicator: false
        });
      });
    }
  }

  // method to get the typing text in the search bar
  getValueFromHeaderSearch = text => {
    this.setState({ filterKey: text });
  };

  // render method for viewing
  render() {
    const { currentUserID } = this.state;
    if (this.state.indicator) {
      return (
        <View style={styles.container}>
          <SearchHeaderBar />
          <Text style={styles.feedText}>Your feed</Text>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SearchHeaderBar
            getValueFromHeaderSearch={this.getValueFromHeaderSearch}
            search={this.searchByTheDestination}
          />
          <Text style={styles.feedText}>Your feed</Text>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            {this.state.objects.map((objects, key) => {
              if (objects.finished === false) {
                if (objects.key === currentUserID) {
                  return (
                    <ListItems
                      from={objects.from.title2}
                      to={objects.to.title1}
                      userID={objects.key}
                      screen="train_"
                      posted={objects.trainName}
                      userImage={require("../../images/train/traine.jpg")}
                      onPress={() =>
                        this.redirectUserToSharingScreen(objects.key)
                      }
                      key={key}
                    />
                  );
                } else {
                  return (
                    <ListItems
                      from={objects.from.title2}
                      to={objects.to.title1}
                      userID={objects.key}
                      screen="train_"
                      posted={objects.trainName}
                      userImage={require("../../images/train/traine.jpg")}
                      onPress={() =>
                        this.redirectUserToSharingScreen(objects.key)
                      }
                      key={key}
                    />
                  );
                }
              }
            })}
          </ScrollView>
          {/* <TouchbleScale
            style={styles.shareLocationTouchableScale}
            onPress={() =>
              this.props.navigation.navigate("ShareLocation", {
                prevScreen: "TrainScreen"
              })
            }
          >
            <View elevation={5}>
              <Image
                source={require("../../images/updated_logo.png")}
                style={styles.shareLocationImage}
              />
            </View>
          </TouchbleScale> */}
        </View>
      );
    }
  }
}

// method to convert the json object to js array
function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
    var item = childSnapshot.val();
    item.key = childSnapshot.key;

    returnArr.push(item);
  });

  return returnArr;
}

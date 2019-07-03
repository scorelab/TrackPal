import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import SearchHeaderBar from "../../components/SearchHeaderbar/searchHeaderbar.js";
import ListItems from "../../components/ListComponent/listItemComponent.js";
import styles from "./style.js";
import TouchbleScale from "react-native-touchable-scale";
import Modal from "react-native-modal";

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

  searchByTheDestination(destination) {
    if (destination !== null || destination !== "") {
      var that = this;
      this.setState({
        isModalVisible: false
      });
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
      this.setState({
        isModalVisible: false
      });
    }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

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
          <TouchbleScale
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
          </TouchbleScale>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          {/* add model to search the list with destination function */}
          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={this.toggleModal}
          >
            <View
              style={{
                backgroundColor: "white",
                margin: 10,
                padding: 50,
                borderRadius: 15
              }}
            >
              <Text>Enter the Detination Name</Text>
              <KeyboardAvoidingView behavior="position">
                <TextInput
                  placeholder="Destination"
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  style={styles.input}
                  onChangeText={text => this.setState({ filterKey: text })}
                />
                <TouchableOpacity
                  style={styles.searchFilter}
                  onPress={() =>
                    this.searchByTheDestination(this.state.filterKey)
                  }
                >
                  <Text style={styles.filterText}>Search</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </Modal>

          <SearchHeaderBar />
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
                      message="This is your shared details. Tap to view"
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
                      message="Posted by someone else. Tap to view location sharing and shared person's details."
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
          {/* <Icon
            name="search"
            reverse
            raised
            color="blue"
            containerStyle={{
              position: "absolute",
              marginTop: "150%",
              paddingRight: "60%"
            }}
            onPress={this.toggleModal}
          /> */}
        </View>
      );
    }
  }
}

// method to conver the json object to js array
function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
    var item = childSnapshot.val();
    item.key = childSnapshot.key;

    returnArr.push(item);
  });

  return returnArr;
}

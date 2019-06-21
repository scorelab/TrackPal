import React, { Component } from "react";
import { TextInput, View, Image, Text } from "react-native";
import styles from "./styles.js";
import { Icon } from "react-native-elements";
import CustomIcon from "../../../resources/customIcon.js";

export default class SearchHeaderBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    searchEnabled: false
  };

  render() {
    return (
      <View style={styles.navigationBar}>
        <View style={styles.titleArea}>
          {this.state.searchEnabled === true ? (
            <View style={styles.titleArea}>
              <Icon
                name="arrow-back"
                type="Ionicons"
                color="black"
                onPress={() => this.setState({ searchEnabled: false })}
              />
              <TextInput
                placeholder="Search"
                placeholderTextColor="white"
                style={styles.input}
                onChangeText={text => this.setState({ filterKey: text })}
              />
            </View>
          ) : (
            <View style={styles.titleArea}>
               <Image
                  style={styles.profileImage}
                  source={require("../../images/user_image_1.jpg")}
                />
              <View style={{ marginLeft: 220 }}>
                <CustomIcon
                  name="search"
                  color="black"
                  style={styles.customIcon}
                  size={20}
                  onPress={() => this.setState({ searchEnabled: true })}
                />
              </View>
              <View style={{ marginLeft: 15 }}>
                <CustomIcon
                  name="bell"
                  color="black"
                  style={styles.customIcon}
                  size={20}
                  onPress={() => this.setState({ searchEnabled: true })}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

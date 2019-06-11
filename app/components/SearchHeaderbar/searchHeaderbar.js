import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./styles.js";
import { Icon } from "react-native-elements";

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
                color="white"
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
              <Text
                style={{
                  fontSize: 24,
                  color: "white",
                  paddingLeft: 15,
                  paddingRight: 230
                }}
              >
                TrackPal
              </Text>
              <View style={{ paddingLeft: 25 }}>
                <Icon
                  name="search"
                  type="EvilIcons"
                  color="white"
                  containerStyle={{
                    borderRadius: 100,
                    borderColor: "white",
                    borderWidth: 1
                  }}
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

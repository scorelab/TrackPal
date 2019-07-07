import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, Image } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import CustomIcon from "./resources/customIcon.js";

// importing screens
import LoginScreen from "./app/screens/LoginScreen/loginScreen.js";
import MapScreen from "./app/screens/MapScreen/mapScreen.js";
import Profile from "./app/screens/ProfileScreen/profileScreen.js";
import TrainScreen from "./app/screens/TrainScreen/trainScreen.js";
import BusScreen from "./app/screens/BusScreen/busScreen.js";
import SharingScreen from "./app/screens/SharingScreen/sharingScreen.js";
import LandingScreen from "./app/screens/LandingScreen/landingScreen.js";
import SignUpScreen from "./app/screens/SignUpScreen/signUpScreen.js";
import ResetPasswordScreen from "./app/screens/ResetPasswordScreen/resetPasswordScreen.js";
import OnboardScreen from "./app/screens/Onboarding/onboardingScreen.js";

// bottom tab navigator to authed users
const ScreenStack = createBottomTabNavigator(
  {
    Bus: { screen: BusScreen },
    Map: { screen: MapScreen },
    Train: { screen: TrainScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Bus") {
          iconName = "bus";
        } else if (routeName === "Map") {
          return (
            <View style={{marginBottom: 50}}>
              <Image
                source={require("./app/images/updated_logo.png")}
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: "rgba(0,0,0,0.05)",
                  padding: 10,
                  borderRadius: 50,
                  borderColor: "rgba(0,0,0,0.09)",
                  borderWidth: 2
                }}
              />
            </View>
          );
        } else if (routeName === "Train") {
          iconName = "train_";
        }
        return (
          <CustomIcon
            name={iconName}
            size={20}
            color={tintColor}
            style={{
              borderRadius: 100,
              backgroundColor: "rgba(0,0,0,0.1115)",
              padding: 5
            }}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#3d9bf9",
      inactiveTintColor: "gray"
    }
  }
);

const AuthStack = createStackNavigator(
  {
    App: {
      screen: ScreenStack
    },
    ShareLocation: {
      screen: MapScreen
    },
    SharingLocation: {
      screen: SharingScreen
    },
    Landing: {
      screen: LandingScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
    ResetPassword: {
      screen: ResetPasswordScreen
    },
    Onboard: {
      screen: OnboardScreen
    }
  },
  {
    initialRouteName: "App",
    headerMode: "none"
  }
);

const SwitchNav = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  },
  Dashboard: AuthStack
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const Appcontainer = createAppContainer(SwitchNav);
export default Appcontainer;

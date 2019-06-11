import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import Ionicons from "react-native-vector-icons/FontAwesome5";

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

// bottom tab navigator to authed users
const ScreenStack = createBottomTabNavigator(
  {
    Bus: { screen: BusScreen },
    Train: { screen: TrainScreen },
    Profile: { screen: Profile }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Bus") {
          iconName = "bus";
        } else if (routeName === "Train") {
          iconName = "train";
        } else if (routeName === "Profile") {
          iconName = "user";
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#3d9bf9",
      inactiveTintColor: "gray"
    }
  }
);

// bottom tab navigator to not authed users
const nonAuthScreenStack = createBottomTabNavigator(
  {
    Bus: { screen: BusScreen },
    Train: { screen: TrainScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Bus") {
          iconName = "bus";
        } else if (routeName === "Train") {
          iconName = "train";
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
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
    noAuthed: {
      screen: nonAuthScreenStack
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
})

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

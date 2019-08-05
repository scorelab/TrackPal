import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground
} from "react-native";
import styles from "./style";
import * as EmailValidator from "email-validator";
import { AccessToken, LoginManager } from "react-native-fbsdk";
import { f, auth } from "../../../config/config.js";

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      Password: "",
      ConfirmPassword: "",
      isRegistering: false
    };
  }

  componentDidMount() {
    var that = this;
    f.auth().onAuthStateChanged(function(user) {
      if (user) {
        that.redirectUser();
      }
    });
  }

  // method to redirect user to the application feed
  redirectUser() {
    const { navigate } = this.props.navigation;
    navigate("App");
  }

  // method to view the sign in view
  render() {
    return (
      <ImageBackground
        source={require("../../images/bg_image.png")}
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
        <View style={styles.firstContainer}>
          <ScrollView style={styles.scrollStyle}>
            <View style={styles.container}>
              <KeyboardAvoidingView behavior="position">
                <View style={styles.logoContainer}>
                  <Image
                    source={require("../../images/New2.png")}
                    style={styles.logo}
                  />
                </View>
                <View style={styles.formContainer}>
                  <TextInput
                    placeholder="Your Name"
                    placeholderTextColor="white"
                    style={styles.input}
                    onChangeText={text => this.setState({ name: text })}
                  />
                  <TextInput
                    placeholder="Your Email"
                    keyboardType="email-address"
                    placeholderTextColor="white"
                    style={styles.input}
                    onChangeText={text => this.setState({ email: text })}
                  />
                  <TextInput
                    placeholder="Pasword"
                    secureTextEntry={true}
                    placeholderTextColor="white"
                    style={styles.input}
                    onChangeText={text => this.setState({ Password: text })}
                  />
                  <TextInput
                    placeholder="Confirm Pasword"
                    secureTextEntry={true}
                    placeholderTextColor="white"
                    style={styles.input}
                    onChangeText={text =>
                      this.setState({ ConfirmPassword: text })
                    }
                  />
                </View>
              </KeyboardAvoidingView>
              <Text style={styles.privacyText}>
                by tapping SignIn, you agree with our Tearms of
              </Text>
              <Text style={styles.privacyText}>
                {" "}
                service and Privacy Policy
              </Text>
              <TouchableOpacity
                onPress={this.signUpAsync}
                style={styles.signInButton}
              >
                <Text style={styles.buttonText}>SIGN ME UP</Text>
              </TouchableOpacity>

              <TouchableOpacity />
              <View style={styles.signInTextArea}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text style={styles.text}>I already have an Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }

  // method to register the user with email and password
  register() {
    var that = this;
    let email = this.state.email;
    let password = this.state.Password;

    this.setState({ isRegistering: true });

    const tempUser = {
      first_name: "Annonymous",
      last_name: "Unverified Email",
      birthday: "01/01/1999"
    };

    f.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(data) {
        that.createUser(data.user.uid, tempUser)
        that.setState({ isRegistering: false });
        that.props.navigation.navigate("Onboard");
      })
      .catch(function(error) {
        var errorMessage = error.message;
        console.log("Error = " + errorMessage);
        alert(errorMessage);
        that.setState({ isRegistering: false });
      });
  }

  // method to validate the user's email and password
  signUpAsync = async () => {
    if (EmailValidator.validate(this.state.email) === true) {
      if (this.state.Password === this.state.ConfirmPassword) {
        this.register();
      } else {
        alert("password Missmatch");
      }
    } else {
      alert("Please enter A Valid Email");
    }
  };

  // method to create a user document in the user collection
  createUser = (uid, userData) => {
    const defaults = {
      uid,
      ageRange: [20, 30],
      ratings: 5,
      numOfChcances: 1
    };
    f.database()
      .ref("users")
      .child(uid)
      .update({ ...userData, ...defaults });
  };
}

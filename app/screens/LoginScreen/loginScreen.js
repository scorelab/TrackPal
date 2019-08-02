import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import { SocialIcon } from "react-native-elements";
import styles from "./style.js";
import * as EmailValidator from "email-validator";
import { f, webClinetID } from "../../../config/config.js";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";
const FBSDK = require("react-native-fbsdk");
const { LoginManager, AccessToken } = FBSDK;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpinner: true,
      social: false,
      email: "",
      password: "",
      isLogging: false
    };
  }

  componentDidMount() {
    GoogleSignin.configure({
      webClientId: webClinetID,
      offlineAccess: true
    });

    f.auth().onAuthStateChanged(auth => {
      if (auth) {
        this.firebaseRef = f.database().ref("users");
        this.firebaseRef.child(auth.uid).on("value", snap => {
          const user = snap.val();
          if (user != null) {
            this.firebaseRef.child(auth.uid).off("value");

            this.props.navigation.navigate("App");
          }
        });
      } else {
        this.setState({ showSpinner: false });
      }
    });
  }

  onPressLogin() {
    this.setState({ showSpinner: true });
    LoginManager.logInWithReadPermissions([
      "public_profile",
      "user_birthday",
      "email",
      "user_photos"
    ]).then(result => this._handleCallBack(result), function(error) {
      alert("Login fail with error: " + error);
      this.setState({ showSpinner: false });
    });
  }

  _handleCallBack(result) {
    let _this = this;
    if (result.isCancelled) {
      alert("Login cancelled");
      this.setState({ showSpinner: false });
    } else {
      AccessToken.getCurrentAccessToken().then(data => {
        const token = data.accessToken;
        fetch(
          "https://graph.facebook.com/v2.8/me?fields=id,first_name,last_name,gender,birthday&access_token=" +
            token
        )
          .then(response => response.json())
          .then(json => {
            const imageSize = 120;
            const facebookID = json.id;
            const fbImage = `https://graph.facebook.com/${facebookID}/picture?height=${imageSize}`;
            this.authenticate(data.accessToken).then(function(result) {
              const { uid } = result;
              _this.createUser(uid, json, token, fbImage);
            });
          })
          .then(() => {
            _this.props.navigation.navigate("Onboard");
          })
          .catch(function(err) {
            console.log(err);
          });
      });
    }
  }

  authenticate = token => {
    const provider = f.auth.FacebookAuthProvider;
    const credential = provider.credential(token);
    let ret = f.auth().signInWithCredential(credential);
    return ret;
  };

  createUser = (uid, userData, token, dp) => {
    const defaults = {
      uid,
      token,
      dp,
      ageRange: [20, 30],
      ratings: 5,
      numOfChcances: 1
    };
    f.database()
      .ref("users")
      .child(uid)
      .update({ ...userData, ...defaults });
  };

  // methods to log with usename and password

  login() {
    var that = this;
    let email = this.state.email;
    let password = this.state.password;

    let { navigate } = this.props.navigation;

    this.setState({ isLogging: true });

    f.auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(data) {
        that.setState({ isLogging: false });
        navigate("App");
      })
      .catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage.toString());
        that.setState({ isLogging: false });
      });
  }

  _signInAsync = async () => {
    if (EmailValidator.validate(this.state.email) === true) {
      if (this.state.Pasword != "") {
        this.login();
      } else {
        alert("Enter the password");
      }
    } else {
      alert("Please enter A Valid Email");
    }
  };

  // google sign in

  _googleSignIn = async () => {
    this.setState({ showSpinner: true });
    var that = this;
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.signIn()
        .then(data => {
          const credential = f.auth.GoogleAuthProvider.credential(
            data.idToken,
            data.accessToken
          );
          f.auth()
            .signInWithCredential(credential)
            .then(user => {
              const newUser = {
                first_name: user.displayName,
                last_name: "",
                uid: user.uid
              };

              that.createGoogleUser(user.uid, newUser, user.photoURL);
            });
        })
        .then(() => {
          that.props.navigation.navigate("Onboard");
        })
        .catch(error => {
          alert(error.code);
          that.setState({ showSpinner: false });
        });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert(error.code);
        this.setState({ showSpinner: false });
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert(error.code);
        this.setState({ showSpinner: false });
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert(error.code);
        this.setState({ showSpinner: false });
      } else {
        alert(error.code);
        this.setState({ showSpinner: false });
      }
    }
  };

  createGoogleUser = (uid, userData, dp) => {
    const defaults = {
      uid,
      dp,
      ageRange: [20, 30],
      ratings: 5,
      numOfChcances: 1
    };
    f.database()
      .ref("users")
      .child(uid)
      .update({ ...userData, ...defaults });
  };

  render() {
    const { isLogging, showSpinner } = this.state;

    if (isLogging || showSpinner) {
      return (
        <ImageBackground
          source={require("../../images/bg_image.png")}
          style={{ width: "100%", height: "100%", flex: 1 }}
        >
          <View style={styles.firstContainer}>
            <ScrollView style={styles.scrollStyle}>
              <View style={styles.container2}>
                <Image
                  source={require("../../images/New2.png")}
                  style={styles.logo}
                />
              </View>
              <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          source={require("../../images/bg_image.png")}
          style={{ width: "100%", height: "100%", flex: 1 }}
        >
          <View style={styles.firstContainer}>
            <ScrollView style={styles.scrollStyle}>
              <View style={styles.container2}>
                <Image
                  source={require("../../images/New2.png")}
                  style={styles.logo}
                />
              </View>

              {this.state.social === false ? (
                <View style={styles.container}>
                  <Text style={styles.privacyText}>
                    by tapping Login, you agree with our Tearms of
                  </Text>
                  <Text style={styles.privacyText}>
                    {" "}
                    service and Privacy Policy
                  </Text>
                  <TouchableOpacity onPress={this.onPressLogin.bind(this)}>
                    <SocialIcon
                      style={{ width: 300, height: 50 }}
                      title="LOGIN WITH FACEBOOK"
                      button
                      type="facebook"
                    />
                  </TouchableOpacity>

                  <GoogleSigninButton
                    style={{ width: 300, height: 50 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._googleSignIn}
                  />

                  <TouchableOpacity
                    onPress={() => this.setState({ social: true })}
                  >
                    <SocialIcon
                      style={{
                        width: 300,
                        height: 50,
                        borderWidth: 1,
                        borderColor: "white"
                      }}
                      title="LOGIN WITH EMAIL"
                      button
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <KeyboardAvoidingView behavior="position">
                  <View style={styles.containerNew}>
                    <TextInput
                      placeholder="Email"
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
                      onChangeText={text => this.setState({ password: text })}
                    />
                    <TouchableOpacity
                      style={styles.loginTouchableOpacity}
                      onPress={this._signInAsync}
                    >
                      <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>
              )}

              {this.state.social === false ? (
                <View style={styles.container3}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("SignUp")}
                  >
                    <Text style={styles.text}>I don't have an account</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.container4}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("SignUp")}
                  >
                    <Text style={styles.text}>I don't have an account</Text>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.orText}>or</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("ResetPassword")
                    }
                  >
                    <Text style={styles.text}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              )}
            </ScrollView>
          </View>
        </ImageBackground>
      );
    }
  }
}

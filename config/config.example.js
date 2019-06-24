import firebase from "firebase";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var MAP_API_KEY = "";
var WEB_CLIENT_ID =
  "";

export const MAP_API = MAP_API_KEY;
export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const webClinetID = WEB_CLIENT_ID;

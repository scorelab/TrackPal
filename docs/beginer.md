# TrackPal - Go-social Community App

## Beginner Guideline

Please note that if you follow these steps to build the application, the app won't work as expected but can be used ti build the app and find issues.

## How to Run

**Note : This document currently only supports for Android. iOS document will be available soon after the iOS build.**

*1. Fork the original repository and use your own branch for your developments. To contribute for the original project, use master branch.*

    `git clone https://github.com/scorelab/TrackPal.git`

*2. Change the working branch to `"without-google-sign-in"` branch
    open a terminal or cmd and,*

    `git checkout without-google-sign-in`
*3. Install npm packages
    open a terminal or cmd and,*

    `npm install`
    
### Install React-Native

We are using reat-native-cli. So make sure to install react-native-cli rather than installing react-native-expo. Before installing react-native make sure to install the pre-requirements.
* Node
* Python
* JDK
* Android Studio

    * Android SDK
    * Android SDK Platform
    * (Optional) Android Virtual Device

You can find a complete tutorial in the given below link.
#### [Install Reat-Native](https://facebook.github.io/react-native/docs/0.59/getting-started)

### Configure Firebase

We are using firebase as the backend(BaaS). So the developer himself needs to configure his own firebase. Create a firebase project as your own and use it's credentials for the application. You can find how to create a firebase project and find the credentials in the below link.

#### [Firebase Integration](http://console.firebase.google.com)

Copy your credentials and paste the content in the following file.

`/config/config.example.js`

Example : 
```
var firebaseConfig = {
  apiKey: "your credentials",
  authDomain: "your credentials",
  databaseURL: "your credentials",
  projectId: "your credentials",
  storageBucket: "your credentials",
  messagingSenderId: "your credentials",
  appId: "your credentials"
};
```
> Note : Only config the firebase part.

Rename the file name as **`config.js`** otherwise it won't work.

### Google Map Configuration

The default map for the application is google map. To config the map with the application you should have GCP(Google Cloud Platform) account. To obtain a **`google map api key`** follow the given link. You can restrict permissions for api methods. It's OK if you don't want to restrict the api key as the application only needs location and searching api methods.

#### [Obtain Map Api Key](https://cloud.google.com/maps-platform/)

Once you get the map api key, copy it and paste in the following files. Make sure to paste the key in the right places.

* **`/android/app/main/src/AndroidManifest.xml`**
    ```<meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="Your api key goes here"/>```
* **`/congig/config.js`**
    `var MAP_API_KEY = "Your api key goes here";`

> Note: If you follow the developer guidline you should find methods to configure Google SigIn and FaceBook SignIn methods. In here those steps are ignored. So the functionality of those functions won't work. You should follow the developer guideline in order to have fully functional application.

*4. Run the project
    If you config all those dependencies your are now free to run the application in your android device. Paste the following command in the terminal.*

    `npx react-native run-android`
    
You can always try the developer guideline as this way you may comeup with a lot of issues.
Enjoy coding :+1: 
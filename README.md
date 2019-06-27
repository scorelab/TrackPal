# TrackPal - Go-social Community App

<img src="https://i.imgur.com/g02h7HP.png" width="75">
---
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4fb5295fe71a4a589277065334f88a59)](https://www.codacy.com/app/shehand/TrackPal?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=scorelab/TrackPal&amp;utm_campaign=Badge_Grade)   [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## About
In Sri Lanka, the transportation tracking problem is a huge challenge. The passengers can't determine the current position of their transportation medium (in this case it may be bus or train) correctly. So they have to wait until it arrives at their pickup location (it may be a bus stop, bus stand or railway station). So TrackPal is the solution to this problem. 

TrackPal is a public based mobile application that will be implemented using react-native. And the components that are in operation with this application, will be created based on the Go-social components. By using this mobile application, users can share their locations when they are on a bus or train and that shared location will be updated when it moves and other users can see the shared details. This will solve the problem with users have, so that they can find the bus's or train's current location by just tapping on a route or train number on the screen.

## Configurations

1. Fork the original repository and use your own branch for your developments. To contribute for the original project, use master branch. 

`git clone https://github.com/scorelab/TrackPal.git`

2. Install npm packages

open a terminal or cmd and,

npm install

3. React-Native configurations

Use this [link](https://facebook.github.io/react-native/docs/0.59/getting-started) if you haven't configured and installed react-native with your computer.

> NOTE : Make sure to install react native cli rather than installing expo
> 
4. Config firebase with the application

Create your firebase app using this [link](http://console.firebase.google.com). Please fol`
TrackPal -> config -> config.example.js`low every steps correctly.Copy the config details and paste them inside your project. Follow the given path to find the location.

`
TrackPal -> config -> config.example.js`

Make sure to copy the content to the right variables.
Rename the file,

`config.example.js -> config.js`

5. Config map api and web client id

In the config.js file there are two variables called as MAP_API_KEY and WEB_CLIENT_ID. Follow the given links to generate your key and id.

[WEB_CLIENT_ID](https://github.com/react-native-community/react-native-google-signin/blob/master/docs/android-guide.md)
[MAP_API_KEY](https://cloud.google.com/maps-platform/)

Make sure to copy your map api key to the following file also.

`android/app/src/main/AndroidManifest.xml`

6. Facebood SDK configuration

Follow this [link](https://github.com/facebook/react-native-fbsdk) to config your fbsdk manager with the project.

And copy your app id and paste inside the following file also.

`android/app/src/main/res/values/strings.xml`

## Installation

If you config all those dependencies your are now free to run the application in your android device. Paste the following command in the terminal.

`react-native run-android`

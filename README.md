# TrackPal - Go-social Community App

<img src="https://i.imgur.com/g02h7HP.png" width="75">

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4fb5295fe71a4a589277065334f88a59)](https://www.codacy.com/app/shehand/TrackPal?utm_source=github.com&utm_medium=referral&utm_content=scorelab/TrackPal&utm_campaign=Badge_Grade) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## About

In Sri Lanka, the transportation tracking problem is a huge challenge. The passengers can't determine the current position of their transportation medium (in this case it may be bus or train) correctly. So they have to wait until it arrives at their pickup location (it may be a bus stop, bus stand or railway station). So TrackPal is the solution to this problem.

TrackPal is a public based mobile application that will be implemented using react-native. And the components that are in operation with this application, will be created based on the Go-social components. By using this mobile application, users can share their locations when they are on a bus or train and that shared location will be updated when it moves and other users can see the shared details. This will solve the problem with users have, so that they can find the bus's or train's current location by just tapping on a route or train number on the screen.

## How to Run

**Note : This document currently only supports for Android. iOS document will be available soon after the iOS build.**

1.  Fork the original repository and use your own branch for your developments. To contribute for the original project, use master branch.

    `git clone https://github.com/scorelab/TrackPal.git`

2.  Install npm packages
    open a terminal or cmd and,

        `npm install`

3.  Follow the most relevant link to config the project with respect to your needs.

### 🚀 [For Developers](./docs/developer.md)

### 📟 [For Users](./docs/user.md)

4.  Before run the project you migh want to run this command.

    `npx jetify`

5.  Run the project
    If you config all those dependencies your are now free to run the application in your android device. Paste the following command in the terminal.

        `react-native run-android`

Feel free to open any issue with respect to project performance, bugs, or enhancement issues.

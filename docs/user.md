
# TrackPal - Go-social Community App

## User Guideline

User can test the application and open any issues with respect to bugs, performance issues. User can download the debug.apk once it is released, and can be found in release tab. Otherwise user can build their own debug.apk. Please follow the steps correctly to build the application.

Use the given document to configure the application for build the apk file.

#### [Config the application](./developer.md)

Once your are done withe the configuration open a terminal in the project folder and paste the following command on it.

**`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`**

The above command will create the android file with combining our js files. Next we need to build the application. So paste the following code to build it.

**`cd android/ ./gradlew assembleDebug`**

Once the project building is done, direct in to the following directory and you can find the debug.apk file on it. Install it and test the application. 

**`/android/app/build/outputs/apk/app-debug.apk`**

> Note : As this is a debug application sometimes playstore will warn
> you with some problems. Please ignore them as they are occurring as we
> have't add any playstore configurations to the application.

OK now your are done with building the application. Enjoy the application. Feel free to open any issue with respect to the application.
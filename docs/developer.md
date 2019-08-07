# TrackPal - Go-social Community App

## Developer Guideline

As a developer you can suggest any improvements for the app. Please follow the instructions to setup the react native project with your local machine.

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

### Google Sign In Configuration / Facebook Sign In Configuration

Note that this part is **not necessary** to follow. If the developer is not interested in fully working app, you can continue without this part. But some part of the application won't work.

#### Google
This is a complex task. Make sure to follow the given link with correct steps otherwise you will end up with a mess.

#### [Config Google Sign-In](https://github.com/react-native-community/react-native-google-signin/blob/master/docs/android-guide.md)

> **Note** : Once you follow the above link, you'll find a way to get the **`web-client id`** for the application. Copy it and paste it in the **`config.js`** file's relevant place.

Make sure to include every files (`google-service.json`, `your-key.keystore`) in the project for getting working model of google sign in.

#### Facebook

Follow the link to get the facebook-app id. You should have a facebook account to have the app id.

#### [Obtain Facebook App Id](https://developers.facebook.com/)

Once you have the facebook app id, copy it and paste it in the following location

* **`/android/app/src/main/res/values/strings.xml`**
     `<string name="facebook_app_id">your app id</string>`

Once you've done with those processes, make sure to enable google sign in and facebook sign in methods in firebase. You can find them in your authentication dashboard, sign-in method tab in firebase dashboard. **This part is compulsory to make sure to work the application if your are dealing with facebook and google sign in methods.**

You've now done with configurations :100:
Enjoy coding :+1: 
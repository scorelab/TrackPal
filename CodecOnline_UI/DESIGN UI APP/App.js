import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class App extends React.Component {
  render() {
    const resizeMode = 'center';

    return (
      <ImageBackground
        style={{ flex: 1, resizeMode, }}
        source={require('./assets/bg.gif')}
        style={styles.container}>
      </ImageBackground>

    );




    return ([

    ]);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 110,
    paddingLeft: 500,
    width: -90,
    height: '220%',
    marginLeft: 4,

    backgroundColor: '#fff',



  },
});
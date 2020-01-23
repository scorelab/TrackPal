
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';


export default class Myapp extends Component<{}> {
  constructor() {
    super();
    this.state = {
      Default_Rating: 2,

      Max_Rating: 5,

    };

    this.Star = 'https://i.ibb.co/qDBpZLv/download-8.png';

    this.Star_With_Border = 'https://i.ibb.co/8N8Hg2X/star-corner.png';
  }
  UpdateRating(key) {
    this.setState({ Default_Rating: key });

  }
  render() {
    let React_Native_Rating_Bar = [];

    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                ? { uri: this.Star }
                : { uri: this.Star_With_Border }
            }
          />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.MainContainer}>



        <View style={styles.childView}>{React_Native_Rating_Bar}</View>
        <Text style={styles.textStyle}>

          {this.state.Default_Rating} / {this.state.Max_Rating}
        </Text>



        <Image
          source={{ uri: 'https://i.ibb.co/thx33Hf/Layer-3.png' }}
          style={{ width: 300, height: 400 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,

  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#deb4ea',
  },
  StarImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 40,
    color: '#500AFF',
    marginTop: 25,
    marginBottom: 30,
  },

});
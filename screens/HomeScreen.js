import React, { Component } from 'react'
import {Stylesheet, Text, View, Button} from 'react-native'

export default class HomeScreen extends Component{
  render(){
    return(
      <View
      style={styles.home}
      >
      <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = Stylesheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

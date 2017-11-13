/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { 
  StackNavigator, TabNavigator
} from "react-navigation";

export default class BeritaAkakom extends React.Component{
  render(){
    return(
      <View>
      <Text>List Of Berita</Text>
      </View>
      );
  }
}

class InfoKampus extends React.Component {
  render() {
    return (
    <View>
      <Text>List Of Info</Text>
    </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Berita: {screen: BeritaAkakom},
  Info: {screen: InfoKampus},
});

const App = StackNavigator({
  Home: { 
    screen: MainScreenNavigator,
    navigationOptions:{
      title:'STMIK AKAKOM Yogyakarta'
    },
  },
});


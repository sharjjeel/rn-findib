/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Map from './components/map';
import Input from './components/input';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Findib!
        </Text>
        <Text style={styles.instructions}>
          Drop a marker to list a lost or found item!
          Please note that the item will be listed for 7 days.
        </Text>
        <View style={styles.map}>
          <Map/>
        </View>

        <View style={styles.input}>
          <Input/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 25
  },
  map: {
    alignItems: 'center'
  },
  input: {
    padding: 10,
    alignItems: 'flex-start',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
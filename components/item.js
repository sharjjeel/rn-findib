import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput, 
  View,
  Button,
  ScrollView,
  TouchableHighlight
} from 'react-native'

export default class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, description, contact, lost} = this.props;
    const colorOfText = lost ? '#ff0000' : '#00bfff';
    return (
      <View style={styles.card}>
          <Text style={{fontWeight:'bold'}}>{title}</Text>
          <Text>{description}</Text>
          <Text>{'contact info: ' + contact}</Text>
          <Text style={{color: colorOfText}}>{lost ? 'This is a lost item' : 'This is a found item'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
      margin: 7,
      padding: 5,
      alignItems: 'center',
      backgroundColor: '#eaeaea',
      borderRadius: 3
    }
})
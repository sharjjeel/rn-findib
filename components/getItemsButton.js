import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native'

export default class GetItemsButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor:'blue'}}>
        <Button
            onPress={() => alert("NO BACKEND")}
            title="Refresh Map"
            color="white"
            accessibilityLabel="Submit item"
          />
      </View>
    );
  }
}
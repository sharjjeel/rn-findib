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
    const {isRefreshing, onClick, region} = this.props;
    return (
      <View style={{backgroundColor:'blue'}}>
        <Button
            onPress={() => onClick(region)}
            title="Refresh Map"
            color="white"
            accessibilityLabel="Submit item"
            disabled={isRefreshing}
          />
      </View>
    );
  }
}
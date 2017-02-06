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
      <View style={{backgroundColor:'blue', borderColor: 'black', 
                    borderStyle: 'solid', borderWidth: 3}}>
        <Button
            onPress={() => onClick(region)}
            title="Refresh Map"
            color="white"
            accessibilityLabel="Get Items in this region"
            disabled={isRefreshing}
          />
      </View>
    );
  }
}
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native'

export default class GoToCurrentLocationButton extends Component {
  constructor(props) {
    super(props);
  }
  
  _getLocation() {
    navigator.geolocation.getCurrentPosition(
          (position) => {
            const initialPosition = position;
            this.props.locationPermissionsChange('authorized');
            this.props.onRegionChange({latitude: initialPosition.coords.latitude, 
                                    longitude: initialPosition.coords.longitude,
                                   latitudeDelta: 0.0050,
                                   longitudeDelta: 0.0050});
          },
          (error) => this.props.locationPermissionsChange('denied'),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
  }

  render() {
    return (
      <View style={{backgroundColor:'transparent', borderColor: 'black', 
                    borderStyle: 'solid', borderWidth: 3}}>
        <Button
            onPress={() => this._getLocation()}
            title="Go To Current Location"
            color="black"
            accessibilityLabel="Goes to current location"
          />
      </View>
    );
  }
}
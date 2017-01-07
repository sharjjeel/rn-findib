import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native'

import MapView from 'react-native-maps'

export default class Map extends Component {
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = position;
        this.props.onRegionChange({latitude: initialPosition.coords.latitude, 
                                longitude: initialPosition.coords.longitude,
                               latitudeDelta: 0.0922,
                               longitudeDelta: 0.0421});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    const {selectedItem} = this.props;
    return (
        <MapView
          style={{
            height:  200 ,
            width: 300,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          region={this.props.region}
          onRegionChange={(region) => {this.props.onRegionChange(region)}}
          onRegionChangeComplete={() => {}}
          showsUserLocation={true}
        >
        <MapView.Marker draggable 
          coordinate={{latitude: this.props.region.latitude, 
                       longitude: this.props.region.longitude}}
          title={selectedItem.title}
          />
       </MapView>
    );
  }
}
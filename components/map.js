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
                               latitudeDelta: 0.0050,
                               longitudeDelta: 0.0050});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    const {region, selectedItem, itemsInRegion, onRegionChange, fetchItems} = this.props;
    return (
        <MapView
          style={{
            height:  200 ,
            width: 300,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          region={region}
          onRegionChange={(newRegion) => {onRegionChange(newRegion)}}
          onRegionChangeComplete={(newRegion) => {fetchItems(newRegion)}}
          showsUserLocation={true}
        >
          <MapView.Marker 
            coordinate={{latitude: region.latitude, 
                         longitude: region.longitude}}
            title={selectedItem.title}
            key={"new"}
            pinColor={selectedItem.lost === undefined ? '#000000' :
              selectedItem.lost ? '#ff0000' : '#00bfff'}
            />
            {itemsInRegion.map(marker => (
                <MapView.Marker
                  key={marker.id}
                  coordinate={{latitude: marker.latitude, 
                               longitude: marker.longitude}}
                  title={marker.title}
                  description={"Description: " + marker.description}
                  pinColor={marker.lost ? '#ff0000' : '#00bfff'}
                />
              ))}
       </MapView>
    );
  }
}
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Alert,
  View,
  Settings
} from 'react-native'

import MapView from 'react-native-maps'

import GoToCurrentLocationButton from './goToCurrentLocationButton';

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {region, selectedItem, itemsInRegion, onRegionChange, fetchItems, locationPermissionsChange} = this.props;
    return (
        <View>
          <GoToCurrentLocationButton onRegionChange={onRegionChange}
            locationPermissionsChange={locationPermissionsChange}/>
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
        </View>
    );
  }
}
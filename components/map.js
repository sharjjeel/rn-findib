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
        this.state = {region: {latitude: initialPosition.coords.latitude, 
                                longitude: initialPosition.coords.longitude,
                               latitudeDelta: 0.0922,
                               longitudeDelta: 0.0421}};
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.state = {region: {latitude: 0, 
                           longitude: 0, 
                           latitudeDelta: 0.0922, 
                           longitudeDelta: 0.0421}};
  }
 watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = position;
        this.setState({region: {latitude: initialPosition.coords.latitude, 
                                longitude: initialPosition.coords.longitude,
                               latitudeDelta: 0.0922,
                               longitudeDelta: 0.0421}});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
        <MapView
          style={{
            height:  200 ,
            width: 300,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          region={this.state.region}
          onRegionChange={(region) => {this.setState({region: region})}}
          onRegionChangeComplete={() => {}}
          showsUserLocation={true}
        >
        <MapView.Marker draggable 
          coordinate={{latitude: this.state.region.latitude, 
                       longitude: this.state.region.longitude}}
          title="Item"
          />
       </MapView>
    );
  }
}
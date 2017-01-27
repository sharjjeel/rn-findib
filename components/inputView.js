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

import Map from '../components/map';
import Input from '../components/input';
import GetItemsButton from '../components/getItemsButton'

export default class InputView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { region, selectedItem, actions, state, isSubmitting, isRefreshing, itemsInRegion} = this.props.passedProps;
    const toCardMode = this.props.toCardMode;
    const styles = this.props.style;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Findib!
        </Text>
        <Text style={styles.instructions}>
          Drop a marker to list a lost or found item!
          Please note that the item will only be listed for 7 days.
        </Text>
        <View style={{height: 10}}></View>
        <View>
          <GetItemsButton isRefreshing={isRefreshing} 
            onClick={actions.fetchItems}
            region={region}/>
        </View>
        <View style={{height: 10}}></View>
        <View style={styles.map}>
          <Map itemsInRegion={itemsInRegion} selectedItem={selectedItem} region={region} onRegionChange={actions.regionChange}/>
        </View>

        <View style={{height: 10}}></View>
        <TouchableHighlight onPress={toCardMode} style={{backgroundColor:'white', alignItems:'center'}}>
          <Text style={{fontSize:30}}>See in list view</Text>
        </TouchableHighlight>

        <View style={styles.input}>
          <Input isSubmitting={isSubmitting} region={region} 
            selectedItem={selectedItem} onChange={actions.formChange} 
            onSubmit={actions.submitItem}/>
        </View>
      </ScrollView>
    );
  }
}
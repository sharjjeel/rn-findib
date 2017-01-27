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

import Item from './item';

export default class CardView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {toInputView, itemsInRegion, style} = this.props;
    return (
      <ScrollView style={style.container}>
        <TouchableHighlight onPress={toInputView} 
                            style={{backgroundColor:'white', alignItems:'center'}}>
          {itemsInRegion.length === 0 ? <Text style={{fontSize:30}}>Go back</Text> : <Text style={{fontSize:30}}>See in map view</Text>}
        </TouchableHighlight>
        <View style={{height: 10}}></View>
        {itemsInRegion.length === 0 ? <Text style={{color:'white', textAlign:'center', fontSize:50, backgroundColor:'blue'}}>Refresh map to see items</Text> : 
            itemsInRegion.map(item => (
          <Item title={item.title} description={item.description}
            contact={item.contact} lost={item.lost}/>))}
      </ScrollView>
    );
  }
}
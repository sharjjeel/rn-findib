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
                            style={{backgroundColor:'white', alignItems:'center',
                                   borderColor: 'black', 
                                    borderStyle: 'solid', borderWidth: 3}}>
          {itemsInRegion.length === 0 ? <Text style={{fontSize:30}}>Go back</Text> : <Text style={{fontSize:30}}>See in map view</Text>}
        </TouchableHighlight>
        <View style={{height: 10}}></View>
        {itemsInRegion.length === 0 ? <Text style={{color:'white', textAlign:'center', fontSize:20, backgroundColor:'blue'}}>There are no items in this region. Please refresh the map to see items or expand the view.</Text> : 
            itemsInRegion.map(item => (
          <Item key={item.id} title={item.title} description={item.description}
            contact={item.contact} lost={item.lost}/>))}
      </ScrollView>
    );
  }
}
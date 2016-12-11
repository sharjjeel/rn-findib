import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput, 
  View,
  Button,
} from 'react-native'

import CheckBox from 'react-native-checkbox';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedItem: {}};
  }
  updateField(field, input) {
    let newState = this.state;
    newState.selectedItem[field] = input;
    this.setState(newState);
  }
  render() {
    return (
        <View>
          <CheckBox
              checkboxStyle={{height: 15, width: 15}}
              label='I am looking for this item'
              checked={this.state.selectedItem.lost}
              onChange={(checked) => this.updateField('lost', !this.state.selectedItem.lost)}
          />
          <CheckBox
                checkboxStyle={{height: 15, width: 15}}
                label='I found this item'
                checked={!this.state.selectedItem.lost}
                onChange={(checked) => this.updateField('lost', !this.state.selectedItem.lost)}
            />
          <TextInput
              style={{height: 40, width: 200, padding: 10}}
              maxLength={20}
              blurOnSubmit={true}
              placeholder="What is it?" value={this.state.selectedItem.title}
              onChangeText={(title) => this.updateField('title', title)}
            />
          <TextInput
              style={{height: 40, width: 300, padding: 10}}
              maxLength={200}
              blurOnSubmit={true}
              placeholder="Can you describe the item?" value={this.state.selectedItem.description}
              onChangeText={(description) => this.updateField('description', description)}
            />
          <TextInput
              style={{height: 40, width: 300, padding: 10}}
              maxLength={100}
              blurOnSubmit={true}
              placeholder={this.state.selectedItem.lost ? 
                  "How can the finders contact you?" : "How can the owner contact you?" } 
              value={this.state.selectedItem.contact}
              onChangeText={(contact) => this.updateField('contact', contact)}
            />

         <View style={{backgroundColor:'red'}}>
          <Button
              onPress={() => this.setState({selectedItem: {}})}
              title="Submit"
              color="white"
              accessibilityLabel="Submit item"
              disabled={!this.state.selectedItem.contact
                        || !this.state.selectedItem.description
                        || !this.state.selectedItem.title}
            />
         </View>
      </View>
    );
  }
}
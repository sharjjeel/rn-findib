import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput, 
  View,
  Button,
  Picker
} from 'react-native'

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
              placeholder="How do finders contact you?" value={this.state.selectedItem.contact}
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
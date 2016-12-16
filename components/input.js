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
  }
  updateField(field, input) {
    this.props.onChange(field, input);
  }
  render() {
    const { selectedItem, onChange, onSubmit } = this.props;
    console.log("ajsndks");
    console.log(this.props);
    return (
        <View>
          <CheckBox
              checkboxStyle={{height: 15, width: 15}}
              label='I am looking for this item'
              checked={selectedItem.lost}
              onChange={(checked) => this.updateField('lost', true)}
          />
          <CheckBox
                checkboxStyle={{height: 15, width: 15}}
                label='I found this item'
                checked={!selectedItem.lost}
                onChange={(checked) => this.updateField('lost', false)}
            />
          <TextInput
              style={{height: 40, width: 200, padding: 10}}
              maxLength={20}
              blurOnSubmit={true}
              placeholder="What is it?" value={selectedItem.title}
              onChangeText={(title) => this.updateField('title', title)}
            />
          <TextInput
              style={{height: 40, width: 300, padding: 10}}
              maxLength={200}
              blurOnSubmit={true}
              placeholder="Can you describe the item?" value={selectedItem.description}
              onChangeText={(description) => this.updateField('description', description)}
            />
          <TextInput
              style={{height: 40, width: 300, padding: 10}}
              maxLength={100}
              blurOnSubmit={true}
              placeholder={selectedItem.lost ? 
                  "How can the finders contact you?" : "How can the owner contact you?" } 
              value={selectedItem.contact}
              onChangeText={(contact) => this.updateField('contact', contact)}
            />

         <View style={{backgroundColor:'red'}}>
          <Button
              onPress={() => onSubmit()}
              title="Submit"
              color="white"
              accessibilityLabel="Submit item"
              disabled={!selectedItem.contact
                        || !selectedItem.description
                        || !selectedItem.title}
            />
         </View>
      </View>
    );
  }
}
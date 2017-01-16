import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput, 
  View,
  Button,
} from 'react-native'

import CheckBox from 'react-native-checkbox';

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  updateField(field, input) {
    this.props.onChange(field, input);
  }
  render() {
    const { isSubmitting, region, selectedItem, onChange, onSubmit } = this.props;
    return (
        <View>
          <View style={{height: 20}}></View>
          <View style={{ width: 300, height: 20 }}>
            <MenuContext>
              <Menu onSelect={(value) => this.updateField('lost', value)}>
                <MenuTrigger disabled={isSubmitting}>
                    <Text style={{fontWeight : 'bold'}}>{this.props.selectedItem.lost === undefined ? '-- Choose --' : (this.props.selectedItem.lost ? 'Lost' : 'Found') + ' Item'}</Text>
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption value={false}>
                    <Text>This item was found</Text>
                  </MenuOption>
                  <MenuOption value={true}>
                    <Text>This item was lost</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </MenuContext>
          </View>
          <View style={{height: 20}}></View>
          <TextInput
              style={{height: 40, width: 200, padding: 10}}
              maxLength={20}
              blurOnSubmit={true}
              editable={!isSubmitting}
              placeholder="What is it?" value={selectedItem.title}
              onChangeText={(title) => this.updateField('title', title)}
            />
          <TextInput
              style={{height: 40, width: 300, padding: 10}}
              maxLength={200}
              blurOnSubmit={true}
              editable={!isSubmitting}
              placeholder="Can you describe the item?" value={selectedItem.description}
              onChangeText={(description) => this.updateField('description', description)}
            />
          <TextInput
              style={{height: 40, width: 300, padding: 10}}
              maxLength={100}
              blurOnSubmit={true}
              editable={!isSubmitting}
              placeholder={selectedItem.lost ? 
                  "How can the finders contact you?" : "How can the owner contact you?" } 
              value={selectedItem.contact}
              onChangeText={(contact) => this.updateField('contact', contact)}
            />

         <View style={{backgroundColor:'red'}}>
          <Button
              onPress={() => onSubmit(selectedItem, region)}
              title="Submit"
              color="white"
              accessibilityLabel="Submit item"
              disabled={!selectedItem.contact
                        || !selectedItem.description
                        || !selectedItem.title
                        || selectedItem.lost === undefined
                        || isSubmitting}
            />
         </View>
      </View>
    );
  }
}
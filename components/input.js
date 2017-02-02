import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput, 
  View,
  Button,
  Linking
} from 'react-native'

import CheckBox from 'react-native-checkbox';

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import ModalDropdown from 'react-native-modal-dropdown';


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
          <View style={{height: 8}}></View>
          <View style={{ width: 300, height: 30}}>
            <ModalDropdown
              ref={el => this._dropdown = el}
              disabled={isSubmitting}
              textStyle={{fontSize: 20}} 
              options={['This item was lost', 'This item was found']}
              onSelect={(index, value) => this.updateField('lost', index == 0)}/>
          </View>
         
          <View style={{height: 1}}></View>
          <TextInput
              style={{height: 40, width: 300, padding: 10}}
              blurOnSubmit={true}
              editable={!isSubmitting && selectedItem.lost !== undefined}
              placeholder="What is it?" value={selectedItem.title}
              onChangeText={(title) => this.updateField('title', title)}
            />
          <TextInput
              style={{height: 40, width: 300, padding: 10}}
              blurOnSubmit={true}
              editable={!isSubmitting && selectedItem.lost !== undefined}
              placeholder="Can you describe the item?" value={selectedItem.description}
              onChangeText={(description) => this.updateField('description', description)}
            />
          <TextInput
              style={{height: 40, width: 300, padding: 10}}
              blurOnSubmit={true}
              editable={!isSubmitting && selectedItem.lost !== undefined}
              placeholder={selectedItem.lost ? 
                  "How can the finders contact you?" : "How can the owner contact you?" } 
              value={selectedItem.contact}
              onChangeText={(contact) => this.updateField('contact', contact)}
            />
        <Text style={{color: 'blue', textAlign:'center', textDecorationLine: 'underline'}}
            onPress={() => Linking.openURL('http://findib.com/terms')}>
        By pressing submit, you agree to these Terms and conditions.
        </Text>
        <View style={{height: 3}}></View>
        <View style={{backgroundColor:'red', borderColor: 'black', 
                    borderStyle: 'solid', borderWidth: 3}}>
          <Button
              onPress={() => onSubmit(selectedItem, region, this._dropdown)}
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
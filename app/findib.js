import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';

import Map from '../components/map';
import Input from '../components/input';

import * as formActions from '../actions/formActions';
import * as regionActions from '../actions/regionActions';
import * as submitActions from '../actions/submitActions';

import _ from 'lodash';

class Findib extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { region, selectedItem, actions, state } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Findib!
        </Text>
        <Text style={styles.instructions}>
          Drop a marker to list a lost or found item!
          Please note that the item will only be listed for 7 days.
        </Text>
        <View style={styles.map}>
          <Map selectedItem={selectedItem} region={region} onRegionChange={actions.regionChange}/>
        </View>

        <View style={styles.input}>
          <Input selectedItem={selectedItem} onChange={actions.formChange} onSubmit={actions.submit}/>
        </View>
      </View>
    );
  }
}

export default connect(state => ({
    state: state,
    region: state.reducer.region, 
    selectedItem: state.reducer.selectedItem
    }),
  (dispatch) => ({
    actions: bindActionCreators(_.merge(regionActions,formActions, submitActions) , dispatch)
  })
)(Findib);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 25
  },
  map: {
    alignItems: 'center'
  },
  input: {
    padding: 10,
    alignItems: 'flex-start',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
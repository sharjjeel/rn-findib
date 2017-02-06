import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator, TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';

import InputView from '../components/inputView';
import CardView from '../components/cardView';

import * as formActions from '../actions/formActions';
import * as regionActions from '../actions/regionActions';
import * as submitActions from '../actions/submitActions';
import * as refreshActions from '../actions/refreshActions';
import * as locationPermissionActions from '../actions/locationPermissionActions';

import _ from 'lodash';

class Findib extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const routes = [
        {title: 'Input View', index: 0},
        {title: 'Card View', index: 1},
      ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <ScrollView>
            {
            route.index === 0 ?
            <InputView style={styles} passedProps={this.props} 
              toCardMode={() => navigator.push(routes[1])}
            />:<CardView style={styles} toInputView={() => navigator.pop()} itemsInRegion={this.props.itemsInRegion}/>
          }
        </ScrollView>
        }
      />
    );
  }
}

export default connect(state => ({
    state: state,
    region: state.reducer.region, 
    selectedItem: state.reducer.selectedItem,
    itemsInRegion: state.reducer.itemsInRegion,
    isSubmitting: state.reducer.isSubmitting,
    isRefreshing: state.reducer.isRefreshing,
    locationPermission: state.reducer.locationPermission
    }),
  (dispatch) => ({
    actions: bindActionCreators(_.merge(regionActions, formActions, submitActions, refreshActions, locationPermissionActions) , dispatch)
  })
)(Findib);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 25
  },
  getItems: {
    alignItems: 'center'
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
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  }, 
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  }
});
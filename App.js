/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Findib from './findib';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import {bindActionCreators} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

import * as regionActions from './actions/regionActions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Provider store={store}>
          <Findib />
      </Provider>
    );
  }
}

export default connect(state => ({
    state: { region: state.region, selectedItem: state.selectedItem}
  }),
  (dispatch) => ({
    actions: bindActionCreators(regionActions, dispatch)
  })
)(App);

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
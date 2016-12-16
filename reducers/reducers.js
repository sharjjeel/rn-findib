import * as types from '../actions/actionTypes';

const initialState = {
  region: {longitude: 0, latitude: 0, 
           latitudeDelta: 1, longitudeDelta: 1},
  selectedItem: {lost: true},
  lostItemsInRegion: [],
  foundItemsInRegion: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.REGION_CHANGE:
      return {
        region: action.region,
        selectedItem: state.selectedItem
      };
    case types.FORM_CHANGE:
      let selectedItem = state.selectedItem;
      selectedItem[action.field] = action.input;
      return {
        region: state.region,
        selectedItem: selectedItem
      };
    case types.SUBMIT:
      // push to db
      return {
        region: state.region,
        selectedItem: {lost: true}
      };
    default:
      return state;
  }
}

import * as types from '../actions/actionTypes';

const initialState = {
  region: {longitude: 0, latitude: 0, 
           latitudeDelta: 1, longitudeDelta: 1},
  selectedItem: {},
  itemsInRegion: [],
  isSubmitting: false,
  isRefreshing: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.REGION_CHANGE:
      return {
        region: action.region,
        selectedItem: state.selectedItem,
        itemsInRegion: state.itemsInRegion,
        isRefreshing: state.isRefreshing,
        isSubmitting: state.isSubmitting
      };
    case types.REFRESH_MAP:
      return {
        region: state.region,
        selectedItem: state.selectedItem,
        itemsInRegion: state.itemsInRegion,
        isRefreshing: true,
        isSubmitting: state.isSubmitting
      };
    case types.REFRESHED_MAP:
      return {
        region: state.region,
        selectedItem: state.selectedItem,
        itemsInRegion: [...action.items],
        isRefreshing: false,
        isSubmitting: state.isSubmitting
      };
    case types.FORM_CHANGE:
      let selectedItem = state.selectedItem;
      selectedItem[action.field] = action.input;
      return {
        region: state.region,
        selectedItem: selectedItem,
        itemsInRegion: state.itemsInRegion,
        isRefreshing: state.isRefreshing,
        isSubmitting: state.isSubmitting
      };
    case types.SUBMIT:
      return {
        region: state.region,
        selectedItem: state.selectedItem,
        itemsInRegion: state.itemsInRegion,
        isRefreshing: state.isRefreshing,
        isSubmitting: true
      };
    case types.SUBMITTED:
      return {
        region: state.region,
        selectedItem: {},
        itemsInRegion: [...state.itemsInRegion, action.item],
        isRefreshing: state.isRefreshing,
        isSubmitting: false
      };
    default:
      return state;
  }
}

import * as types from '../actions/actionTypes';

const initialState = {
  region: {}
};

export default function region(state = initialState, action = {}) {
  switch (action.type) {
    case types.REGION_CHANGE:
      return {
        region: action.region
      };
    default:
      return state;
  }
}

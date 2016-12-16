import * as types from './actionTypes';

export function regionChange(region) {
  return {
    region,
    type: types.REGION_CHANGE
  };
}
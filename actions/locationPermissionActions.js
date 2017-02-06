import * as types from './actionTypes';

export function locationPermissionsChange(access) {
  return {
    type: types.LOCATION_PERMISSIONS,
    access
  };
}
import * as types from './actionTypes';

export function refreshMap(region) {
  return {
    region,
    type: types.REFRESH_MAP
  };
}

export function refreshedMap(items) {
  return {
    items,
    type: types.REFRESHED_MAP
  };
}

export function fetchItems(region) {
  return dispatch => {
    dispatch(refreshMap(region))
    const url = `https://vast-headland-86513.herokuapp.com/item/items?longitude=${region.longitude}` 
                  + `&latitude=${region.latitude}`
                  + `&radius=${region.latitudeDelta}`;
    return fetch(url)
      .then(response => response._bodyText)
      .then(json => dispatch(refreshedMap(JSON.parse(json))))
  }
}
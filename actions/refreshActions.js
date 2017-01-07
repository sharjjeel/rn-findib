import * as types from './actionTypes';

export function refreshMap(region) {
  return {
    region,
    type: types.REFRESH_MAP
  };
}

export function refreshingMap() {
  return {
    type: types.REFRESHING_MAP
  };
}

export function refreshedMap(items) {
  return {
    items,
    type: types.REFRESHED_MAP
  };
}

function fetchItems(region) {
  return dispatch => {
    dispatch(refreshMap(subreddit))
    return fetch(`http://localhost:8080/item/`)
      .then(response => response.json())
      .then(json => dispatch(refreshedMap(json)))
  }
}
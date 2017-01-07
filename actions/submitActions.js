import * as types from './actionTypes';

export function submit(item) {
  return {
    type: types.SUBMIT,
    item
  };
}

export function submited(item) {
  return {
    type: types.SUBMITED,
    item
  };
}

export function submitItem(item, region) {
  return dispatch => {
    dispatch(submit(item))
    
    return fetch('http://localhost:8080/item/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: item.title,
            description: item.description,
            longitude: region.longitude,
            latitude: region.latitude,
            contact: item.contact,
            lost: item.lost
          })
        }).then(response => response.json())
      .then(json => dispatch(submited(json)))
  }
}

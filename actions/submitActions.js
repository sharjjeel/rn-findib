import * as types from './actionTypes';

function submit(item) {
  return {
    type: types.SUBMIT,
    item
  };
}

function submitted(item) {
  return {
    type: types.SUBMITTED,
    item
  };
}

export function submitItem(item, region) {
  return dispatch => {
    dispatch(submit(item))
    
    return fetch('https://vast-headland-86513.herokuapp.com/item/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: item.title,
            description: item.description,
            longitude: region.longitude,
            latitude: region.latitude,
            contact: item.contact,
            lost: item.lost
          })
        }).then(response => response._bodyText)
      .then(json => dispatch(submitted(JSON.parse(json))))
  }
}

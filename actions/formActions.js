import * as types from './actionTypes';

export function formChange(field, input) {
  return {
    field,
    input,
    type: types.FORM_CHANGE
  };
}
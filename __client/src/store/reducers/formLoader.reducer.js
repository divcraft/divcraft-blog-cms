import { SET_FORM_LOADER_ON, SET_FORM_LOADER_OFF } from 'constants';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_LOADER_ON:
      return action.payload;
    case SET_FORM_LOADER_OFF:
      return action.payload;
    default:
      return state;
  }
};

import { ADD_DELETED_PHOTO, CLEAR_DELETED_PHOTOS_ARRAY } from 'constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DELETED_PHOTO:
      return [...state, action.payload];
    case CLEAR_DELETED_PHOTOS_ARRAY:
      return initialState;
    default:
      return state;
  }
};

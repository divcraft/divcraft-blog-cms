import { FETCH_USER_DATA } from 'constants';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return action.payload;
    default:
      return state;
  }
};

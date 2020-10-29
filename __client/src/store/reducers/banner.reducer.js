import { BANNER } from 'constants';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case BANNER.GET_BANNER_API:
      return action.payload;
    default:
      return state;
  }
};

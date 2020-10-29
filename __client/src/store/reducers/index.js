import { combineReducers } from 'redux';
import banner from './banner.reducer';

const rootReducer = combineReducers({
  banner,
});

export default rootReducer;

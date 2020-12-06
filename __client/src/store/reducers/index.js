import { combineReducers } from 'redux';
import errorMessage from './errorMessage.reducer';

const rootReducer = combineReducers({
  errorMessage,
});

export default rootReducer;

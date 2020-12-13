import { combineReducers } from 'redux';
import errorMessage from './errorMessage.reducer';
import formLoader from './formLoader.reducer';

const rootReducer = combineReducers({
  errorMessage,
  formLoader,
});

export default rootReducer;

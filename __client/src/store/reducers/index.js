import { combineReducers } from 'redux';
import errorMessage from './errorMessage.reducer';
import loginPageLoaders from './loginPageLoaders.reducer';

const rootReducer = combineReducers({
  errorMessage,
  loginPageLoaders,
});

export default rootReducer;

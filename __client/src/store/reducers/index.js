import { combineReducers } from 'redux';
import errorMessage from './errorMessage.reducer';
import loginPageLoaders from './loginPageLoaders.reducer';
import userData from './userData.reducer';

const rootReducer = combineReducers({
  errorMessage,
  loginPageLoaders,
  userData,
});

export default rootReducer;

import { combineReducers } from 'redux';
import errorMessage from './errorMessage.reducer';
import loginPageLoaders from './loginPageLoaders.reducer';
import userData from './userData.reducer';
import finishedArticles from './finishedArticles.reducer';
import notifications from './notifications.reducer';

const rootReducer = combineReducers({
  errorMessage,
  loginPageLoaders,
  userData,
  finishedArticles,
  notifications,
});

export default rootReducer;

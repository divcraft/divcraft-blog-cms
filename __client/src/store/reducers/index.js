import { combineReducers } from 'redux';
import errorMessage from './errorMessage.reducer';
import loginPageLoaders from './loginPageLoaders.reducer';
import userData from './userData.reducer';
import finishedArticles from './finishedArticles.reducer';
import notifications from './notifications.reducer';
import publishedArticles from './publishedArticles.reducer';
import categories from './categories.reducer';
import comments from './comments.reducer';
import unpublishedArticles from './unpublishedArticles.reducer';

const rootReducer = combineReducers({
  errorMessage,
  loginPageLoaders,
  userData,
  finishedArticles,
  notifications,
  publishedArticles,
  categories,
  comments,
  unpublishedArticles,
});

export default rootReducer;

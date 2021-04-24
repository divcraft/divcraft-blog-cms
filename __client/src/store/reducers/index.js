import { combineReducers } from 'redux';
import errorMessage from './errorMessage.reducer';
import loginPageLoaders from './loginPageLoaders.reducer';
import userData from './userData.reducer';
import finishedArticles from './finishedArticles.reducer';
import notifications from './notifications.reducer';
import publishedArticles from './publishedArticles.reducer';
import categories from './categories.reducer';
import comments from './comments.reducer';
import toGettingPublicArticles from './toGettingPublicArticles.reducer';
import toEditArticles from './toEditArticles.reducer';
import articleData from './articleData.reducer';
import deletedPhotos from './deletedPhotos.reducer';

const rootReducer = combineReducers({
  errorMessage,
  loginPageLoaders,
  userData,
  finishedArticles,
  notifications,
  publishedArticles,
  categories,
  comments,
  toGettingPublicArticles,
  toEditArticles,
  articleData,
  deletedPhotos,
});

export default rootReducer;

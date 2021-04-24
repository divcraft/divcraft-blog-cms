import { ADD_DELETED_PHOTO, CLEAR_DELETED_PHOTOS_ARRAY } from 'constants';

export const addDeletedPhoto = (photoId) => ({
  type: ADD_DELETED_PHOTO,
  payload: photoId,
});

export const clearDeletedPhotosArray = () => ({
  type: CLEAR_DELETED_PHOTOS_ARRAY,
});

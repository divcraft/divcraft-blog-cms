import {
  ADD_DELETED_PHOTO,
  ADD_MULTIPLE_DELETED_PHOTOS,
  CLEAR_DELETED_PHOTOS_ARRAY,
} from 'constants';

export const addDeletedPhoto = (photoId) => ({
  type: ADD_DELETED_PHOTO,
  payload: photoId,
});

export const addMultipleDeletedPhotos = (photoIdArray) => ({
  type: ADD_MULTIPLE_DELETED_PHOTOS,
  payload: photoIdArray,
});

export const clearDeletedPhotosArray = () => ({
  type: CLEAR_DELETED_PHOTOS_ARRAY,
});

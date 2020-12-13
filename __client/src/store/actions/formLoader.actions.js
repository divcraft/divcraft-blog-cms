import { SET_FORM_LOADER_ON, SET_FORM_LOADER_OFF } from 'constants';

export const setFormLoaderOn = {
  type: SET_FORM_LOADER_ON,
  payload: true,
};

export const setFormLoaderOff = {
  type: SET_FORM_LOADER_OFF,
  payload: false,
};

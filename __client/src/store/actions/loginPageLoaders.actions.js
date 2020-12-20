import {
  SET_LOG_IN_FORM_LOADER_ON,
  SET_LOG_IN_FORM_LOADER_OFF,
  SET_RECOVER_PASSWORD_FORM_LOADER_ON,
  SET_RECOVER_PASSWORD_FORM_LOADER_OFF,
} from 'constants';

export const setLogInFormLoaderOn = {
  type: SET_LOG_IN_FORM_LOADER_ON,
};

export const setLogInFormLoaderOff = {
  type: SET_LOG_IN_FORM_LOADER_OFF,
};

export const setRecoverPasswordFormLoaderOn = {
  type: SET_RECOVER_PASSWORD_FORM_LOADER_ON,
};

export const setRecoverPasswordFormLoaderOff = {
  type: SET_RECOVER_PASSWORD_FORM_LOADER_OFF,
};

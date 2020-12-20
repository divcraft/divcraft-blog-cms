import {
  SET_LOG_IN_FORM_LOADER_ON,
  SET_LOG_IN_FORM_LOADER_OFF,
  SET_RECOVER_PASSWORD_FORM_LOADER_ON,
  SET_RECOVER_PASSWORD_FORM_LOADER_OFF,
} from 'constants';

const initialState = {
  isLogInFormLoading: false,
  isRecoverPasswordFormLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOG_IN_FORM_LOADER_ON:
      return {
        ...state,
        isLogInFormLoading: true,
      };
    case SET_LOG_IN_FORM_LOADER_OFF:
      return {
        ...state,
        isLogInFormLoading: false,
      };
    case SET_RECOVER_PASSWORD_FORM_LOADER_ON:
      return {
        ...state,
        isRecoverPasswordFormLoading: true,
      };
    case SET_RECOVER_PASSWORD_FORM_LOADER_OFF:
      return {
        ...state,
        isRecoverPasswordFormLoading: false,
      };
    default:
      return state;
  }
};

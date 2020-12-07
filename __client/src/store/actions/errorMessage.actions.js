import {
  SET_AUTHENTICATION_ERROR,
  SET_EMAIL_NOT_FOUND_ERROR,
  SET_INCORRECT_EMAIL_ERROR,
  SET_INTERNAL_SERVER_ERROR,
  CLEAR_ERROR_MESSAGE,
} from 'constants';

export const setAuthenticationError = {
  type: SET_AUTHENTICATION_ERROR,
  payload: 'Niepoprawna nazwa użytkownika lub hasło.',
};

export const setEmailNotFoundError = {
  type: SET_EMAIL_NOT_FOUND_ERROR,
  payload: 'Brak konta powiązanego z podanym adresem email.',
};

export const setIncorrectEmailError = {
  type: SET_INCORRECT_EMAIL_ERROR,
  payload: 'Podaj poprawny adres email.',
};

export const setInternalServerError = {
  type: SET_INTERNAL_SERVER_ERROR,
  payload: 'Wystąpił błąd z serwerem. Spróbuj ponownie później.',
};

export const clearErrorMessage = {
  type: CLEAR_ERROR_MESSAGE,
  payload: '',
};

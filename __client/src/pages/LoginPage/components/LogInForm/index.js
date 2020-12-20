import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAuthenticationError,
  setInternalServerError,
  clearErrorMessage,
  setLogInFormLoaderOn,
  setLogInFormLoaderOff,
} from 'store/actions';
import { useFormik } from 'formik';
import { Input, Button, RedMessage } from 'components';

const LogInForm = ({ history }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
  const isFormLoading = useSelector(
    (state) => state.loginPageLoaders.isLogInFormLoading
  );
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ username, password }, { resetForm }) => {
      if (errorMessage) dispatch(clearErrorMessage);
      dispatch(setLogInFormLoaderOn);
      Axios.post('/api/auth/login', {
        username,
        password,
      })
        .then((res) => {
          const { status } = res;
          if (status === 200) {
            dispatch(setLogInFormLoaderOff);
            history.replace('/przeglad');
          }
        })
        .catch((err) => {
          const { status } = err.response;
          if (status === 401) dispatch(setAuthenticationError);
          if (status >= 500 && status < 600) dispatch(setInternalServerError);
          dispatch(setLogInFormLoaderOff);
          resetForm({
            values: {
              username,
              password: '',
            },
          });
        });
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="login"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="hasło"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button
          pattern="box"
          type="submit"
          isFormLoading={isFormLoading}
          disabled={
            !formik.values.username || !formik.values.password || isFormLoading
          }
        >
          Zaloguj się
        </Button>
      </form>
      {errorMessage && <RedMessage />}
    </>
  );
};

LogInForm.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(LogInForm);

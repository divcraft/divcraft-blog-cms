import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAuthenticationError,
  setInternalServerError,
  clearErrorMessage,
} from 'store/actions';
import { useFormik } from 'formik';
import { Input, Button, RedMessage } from 'components';

const LogInForm = ({ history }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ username, password }, { resetForm }) => {
      if (errorMessage) dispatch(clearErrorMessage);
      Axios.post('/api/authentication/login', {
        username,
        password,
      })
        .then((res) => {
          const { status } = res;
          if (status === 200) history.push('/przeglad');
        })
        .catch((err) => {
          const { status } = err.response;
          if (status === 401) dispatch(setAuthenticationError);
          if (status >= 500 || status < 600) dispatch(setInternalServerError);
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
          box
          type="submit"
          disabled={!formik.values.username || !formik.values.password}
        >
          Zaloguj się
        </Button>
      </form>
      {errorMessage && <RedMessage>{errorMessage}</RedMessage>}
    </>
  );
};

LogInForm.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(LogInForm);

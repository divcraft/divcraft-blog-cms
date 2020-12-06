import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logInUser } from 'store/actions';
import { Input, Button, RedMessage } from 'components';

const LogInForm = ({ history }) => {
  const dispatch = useDispatch();
  const [validatedError, setValidatedError] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ username, password }, { resetForm }) => {
      if (validatedError) setValidatedError(false);
      Axios.post('/api/authentication/login', {
        username,
        password,
      })
        .then((res) => {
          if (res.status === 200) {
            dispatch(logInUser());
            history.push('/przeglad');
          } else if (res.status === 401) {
            setValidatedError(true);
            resetForm({
              values: {
                username,
                password: '',
              },
            });
          }
        })
        .catch((err) => {
          throw err;
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
      {validatedError && (
        <RedMessage>Niepoprawna nazwa użytkownika lub hasło.</RedMessage>
      )}
    </>
  );
};

LogInForm.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(LogInForm);

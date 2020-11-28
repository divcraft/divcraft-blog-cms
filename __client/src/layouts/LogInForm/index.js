import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logInUser } from 'store/actions';
import { Input, Button, RedMessage } from 'components';
// import { ValidationText } from './style';

const LogInForm = () => {
  const dispatch = useDispatch();
  const [validatedError, setValidatedError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ username, password }, { resetForm }) => {
      Axios.post('/api/authentication/login', {
        username,
        password,
      })
        .then((res) => {
          if (res.status === 200) {
            dispatch(logInUser(res.data));
          } else if (res.status === 204) {
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
  const { username, password } = formik.values;
  useEffect(() => {
    if (!username || !password) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [username, password]);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="login"
          onChange={formik.handleChange}
          value={username}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="hasło"
          onChange={formik.handleChange}
          value={password}
        />
        <Button box type="submit" disabled={isButtonDisabled}>
          Zaloguj się
        </Button>
      </form>
      {validatedError && (
        <RedMessage>Niepoprawna nazwa użytkownika lub hasło.</RedMessage>
      )}
    </>
  );
};

export default LogInForm;

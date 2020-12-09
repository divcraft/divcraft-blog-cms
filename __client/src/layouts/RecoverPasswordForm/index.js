import React, { useState } from 'react';
import { useFormik } from 'formik';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmailNotFoundError,
  setIncorrectEmailError,
  setInternalServerError,
  clearErrorMessage,
} from 'store/actions';
import { Input, Button, RedMessage } from 'components';
import { RecoverPassNotifcation } from './style';

const RecoverPasswordForm = () => {
  const [formSent, setFormSent] = useState(false);
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: ({ email }) => {
      if (errorMessage) dispatch(clearErrorMessage);
      if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
      ) {
        return dispatch(setIncorrectEmailError);
      }
      Axios.post('/api/authentication/recover-password', {
        email,
      })
        .then((res) => {
          const { status } = res;
          if (status === 200) setFormSent(true);
        })
        .catch((err) => {
          const { status } = err.response;
          if (status === 401) dispatch(setEmailNotFoundError);
          if (status >= 500 && status < 600) dispatch(setInternalServerError);
        });
    },
  });
  return (
    <>
      {formSent ? (
        <RecoverPassNotifcation>
          Hasło zostało wysłane na adres
          <div>{formik.values.email}</div>
        </RecoverPassNotifcation>
      ) : (
        <form onSubmit={formik.handleSubmit} noValidate>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Button box type="submit" disabled={!formik.values.email}>
            Wyślij hasło
          </Button>
        </form>
      )}
      {errorMessage && <RedMessage />}
    </>
  );
};

export default RecoverPasswordForm;

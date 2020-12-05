import React, { useState } from 'react';
import { useFormik } from 'formik';
import Axios from 'axios';
import { Input, Button, RedMessage } from 'components';
import { RecoverPassNotifcation } from './style';

const RecoverPasswordForm = () => {
  const [formSent, setFormSent] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: ({ email }) => {
      Axios.post('/api/authentication/recover', {
        email,
      })
        .then((res) => {
          if (res.status === 200) {
            setFormSent(true);
          } else if (res.status === 204) {
            setEmailNotFound(true);
          }
        })
        .catch((err) => {
          throw err;
        });
    },
    validate: (values) => {
      if (emailNotFound) setEmailNotFound(false);
      const errors = {};
      const isEmailWrong = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email
      );
      if (isEmailWrong) {
        errors.email = 'Podaj poprawny adres email.';
      }
      return errors;
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
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={formik.handleChange}
            novalidate
            value={formik.values.email}
          />
          <Button box type="submit" disabled={!formik.values.email}>
            Wyślij hasło
          </Button>
        </form>
      )}
      {formik.errors.email && <RedMessage>{formik.errors.email}</RedMessage>}
      {emailNotFound && (
        <RedMessage>Brak konta powiązanego z podanym adresem email.</RedMessage>
      )}
    </>
  );
};

export default RecoverPasswordForm;

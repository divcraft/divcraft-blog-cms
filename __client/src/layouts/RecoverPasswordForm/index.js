import React from 'react';
import { useFormik } from 'formik';
// import Axios from 'axios';
import { Input, Button } from 'components';

const RecoverPasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    // onSubmit: ({ email }) => {
    //   Axios.post('/api/authentication/recover', {
    //     email,
    //   })
    //     .catch((err) => {
    //       throw err;
    //     });
    // },
  });
  const { email } = formik.values;
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        onChange={formik.handleChange}
        value={email}
      />
      <Button box type="submit">
        Wyślij hasło
      </Button>
    </form>
  );
};

export default RecoverPasswordForm;

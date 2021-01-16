import { useState, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { SUCCESSED, FAILED } from 'constants';

export default () => {
  const [islogged, setIsLogged] = useState(null);
  useEffect(() => {
    let cookieId = Cookies.get('user');
    if (cookieId) {
      cookieId = cookieId.slice(3).slice(0, -1);
      Axios.get(`/api/users/${cookieId}`)
        .then(() => {
          setIsLogged(SUCCESSED);
        })
        .catch(() => {
          Cookies.remove('user');
          setIsLogged(FAILED);
        });
    } else {
      setIsLogged(FAILED);
    }
  }, []);
  return islogged;
};

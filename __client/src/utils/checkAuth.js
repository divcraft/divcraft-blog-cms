import { useState, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';

export default () => {
  const [islogged, setIsLogged] = useState(null);
  useEffect(() => {
    let cookieId = Cookies.get('user');
    if (cookieId) {
      cookieId = cookieId.slice(3).slice(0, -1);
      Axios.get(`/api/users/${cookieId}`)
        .then(() => {
          setIsLogged('true');
        })
        .catch(() => {
          Cookies.remove('user');
          setIsLogged('false');
        });
    } else {
      setIsLogged('false');
    }
  }, []);
  return islogged;
};

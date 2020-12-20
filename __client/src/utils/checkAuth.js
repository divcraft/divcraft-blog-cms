import { useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';

export default () => {
  let cookieId = Cookies.get('user');
  if (cookieId) {
    cookieId = cookieId.slice(3).slice(0, -1);
    useEffect(() => {
      Axios.get(`/api/users/${cookieId}`).then(({ data }) => {
        const databaseId = data._id;
        if (databaseId === cookieId) {
          return true;
        } else {
          Cookies.remove('user');
        }
      });
    }, []);
  } else {
    return false;
  }
  return false;
};

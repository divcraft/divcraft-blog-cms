import React, { useEffect, useState } from 'react';
import { AppContainer } from 'components';
import Axios from 'axios';
import Cookies from 'js-cookie';

const OverviewPage = () => {
  const userId = Cookies.get('user').slice(3).slice(0, -1);
  const [user, setUser] = useState({});
  useEffect(() => {
    Axios.get(`/api/users/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setUser(res.data);
        } else if (res.status !== 200) {
          console.log('Something went wrong.');
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <>
      <AppContainer title="Przegląd" requiresName>
        <div>OverviewPage</div>
        <h2>{user.username}</h2>
      </AppContainer>
    </>
  );
};

export default OverviewPage;

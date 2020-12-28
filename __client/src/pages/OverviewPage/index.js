import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { TitleContainer } from 'components';

const OverviewPage = () => {
  const userId = Cookies.get('user').slice(3).slice(0, -1);
  const [user, setUser] = useState({});
  useEffect(() => {
    Axios.get(`/api/users/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <>
      <TitleContainer username={user.username} />
      <div>OverviewPage</div>
    </>
  );
};

export default OverviewPage;

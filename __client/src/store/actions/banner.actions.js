import Axios from 'axios';
import { useEffect } from 'react';
import { BANNER } from 'constants';

export const getBannerApi = () => (dispatch) => {
  useEffect(() => {
    Axios.get('/api')
      .then(({ data }) => {
        dispatch({
          type: BANNER.GET_BANNER_API,
          payload: data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }, []);
};

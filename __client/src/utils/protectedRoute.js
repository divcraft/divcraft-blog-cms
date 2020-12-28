import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { Redirect, Route } from 'react-router-dom';
import { AppContainer } from 'components';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userCookie = Cookies.get('user');
  return (
    <Route
      {...rest}
      render={(props) =>
        userCookie ? (
          <AppContainer>
            <Component {...props} />
          </AppContainer>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.instanceOf(Object),
};

export default ProtectedRoute;

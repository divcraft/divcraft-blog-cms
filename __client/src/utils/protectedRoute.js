import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { AppContainer, LoadingIndicator } from 'components';
import { checkAuth } from 'utils';
import { SUCCESSED, FAILED } from 'constants';
import { useSelector } from 'react-redux';

// const AppContainer = React.lazy(() => import('components/AppContainer'));

const ProtectedRoute = ({ component: Component, adminAccess, ...rest }) => {
  const isLogged = checkAuth();
  const userData = useSelector((state) => state.userData);
  const isAdmin =
    userData.loadingState === SUCCESSED ? userData.user.isAdmin : false;
  return (
    isLogged && (
      <Route
        {...rest}
        render={(props) => {
          if (isLogged === SUCCESSED) {
            if (adminAccess && !isAdmin) {
              return <Redirect to="/przegląd" />;
            } else {
              return (
                <Suspense fallback={<LoadingIndicator pattern="main" />}>
                  <AppContainer>
                    <Component {...props} />
                  </AppContainer>
                </Suspense>
              );
            }
          } else if (isLogged === FAILED) {
            return <Redirect to="/login" />;
          }
        }}
      />
    )
  );
};

ProtectedRoute.propTypes = {
  adminAccess: PropTypes.bool,
  component: PropTypes.instanceOf(Object),
};

ProtectedRoute.default = {
  adminAccess: false,
};

export default ProtectedRoute;

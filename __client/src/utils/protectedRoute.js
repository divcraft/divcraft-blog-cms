import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { LoadingIndicator } from 'components';
import { checkAuth } from 'utils';

const AppContainer = React.lazy(() => import('components/AppContainer'));

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLogged = checkAuth();
  return (
    isLogged && (
      <Route
        {...rest}
        render={(props) => {
          if (isLogged === 'true') {
            return (
              <Suspense fallback={<LoadingIndicator pattern="main" />}>
                <AppContainer>
                  <Component {...props} />
                </AppContainer>
              </Suspense>
            );
          } else if (isLogged === 'false') {
            return <Redirect to="/login" />;
          }
        }}
      />
    )
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.instanceOf(Object),
};

export default ProtectedRoute;

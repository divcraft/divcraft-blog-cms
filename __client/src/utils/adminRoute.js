import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ProtectedRoute } from 'utils';
import { SUCCESSED } from 'constants';
import { useSelector } from 'react-redux';

const AdminRoute = ({ component: Component, ...rest }) => {
  const userData = useSelector((state) => state.userData);
  const isAdmin =
    userData.loadingState === SUCCESSED ? userData.user.isAdmin : false;
  return isAdmin ? (
    <ProtectedRoute {...rest} component={Component} />
  ) : (
    <Redirect to="/przeglad" />
  );
};

AdminRoute.propTypes = {
  component: PropTypes.instanceOf(Object),
};

export default AdminRoute;

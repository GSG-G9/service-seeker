import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME_PAGE } from '../../Utils/routes.constant';
import { AuthContext } from '../../Context/Authentication';

const LoggedOutRoutes = ({ children, ...otherProps }) => {
  const { isAuth, authLoading } = useContext(AuthContext);

  if (!authLoading && !isAuth) {
    return <Route {...otherProps}>{children}</Route>;
  }
  return <Redirect to={HOME_PAGE} />;
};

LoggedOutRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoggedOutRoutes;

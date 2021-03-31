import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LOGIN_PAGE, HOME_PAGE } from '../../Utils/routes.constant';
import { AuthContext } from '../../Context/Authentication';

const PrivateRoutes = ({ isProvider, children, ...otherProps }) => {
  const {
    isAuth,
    authLoading,
    userData: { role },
  } = useContext(AuthContext);

  if (isAuth && !authLoading) {
    if (!isProvider && role !== 'provider') {
      return <Redirect to={HOME_PAGE} />;
    }
    return <Route {...otherProps}>{children}</Route>;
  }
  return <Redirect to={LOGIN_PAGE} />;
};

PrivateRoutes.defaultProps = {
  isProvider: false,
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
  isProvider: PropTypes.bool,
};

export default PrivateRoutes;

import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LOGIN_PAGE, HOME_PAGE } from '../../Utils/routes.constant';
import { AuthContext } from '../../Context/Authentication';

const PrivateRoutes = ({ isProvider, component, ...otherProps }) => {
  const { isAuth, authLoading, userData } = useContext(AuthContext);

  if (!authLoading && isAuth) {
    if (isProvider && userData.role !== 'provider') {
      return <Redirect to={HOME_PAGE} />;
    }
    return <Route {...otherProps} component={component} />;
  }
  return <Redirect to={LOGIN_PAGE} />;
};

PrivateRoutes.defaultProps = {
  isProvider: false,
};

PrivateRoutes.propTypes = {
  component: PropTypes.func.isRequired,
  isProvider: PropTypes.bool,
};

export default PrivateRoutes;

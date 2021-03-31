import React, { useState, useEffect, createContext } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    let unmounted = true;
    const source = Axios.CancelToken.source();
    (async () => {
      try {
        setError(null);
        const { data: user } = await Axios('/api/v1/is-auth');
        if (unmounted) {
          setIsAuth(true);
          setUserData(user);
          setAuthLoading(false);
        }
      } catch ({ response: resError }) {
        setAuthLoading(false);
        if (resError.status === 401) {
          setIsAuth(false);
          setUserData(null);
        } else {
          setError(resError ? resError.data.message : 'internal server error.');
        }
      }
    })();
    return () => {
      unmounted = false;
      source.cancel('Cancelling in cleanup');
    };
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{
        setIsAuth,
        isAuth,
        userData,
        authLoading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

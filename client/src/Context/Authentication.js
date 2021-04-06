import React, { useState, useEffect, createContext } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        const { data: user } = await Axios('/api/v1/is-auth');
        if (unmounted) {
          setUserData(user.data);
          setIsAuth(true);
          setAuthLoading(false);
        }
      } catch ({ response: resError }) {
        setIsAuth(false);
        setUserData(null);
        setAuthLoading(false);
      }
    })();
    return () => {
      unmounted = false;
    };
  }, [refresh]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        userData,
        authLoading,
        setAuthLoading,
        refresh,
        setRefresh,
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

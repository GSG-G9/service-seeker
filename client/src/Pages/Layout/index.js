import React, { useContext } from 'react';
import { element } from 'prop-types';
import { Spin } from 'antd';

import { AuthContext } from '../../Context/Authentication';

function Layout({ children }) {
  const { authLoading } = useContext(AuthContext);
  return (
    <>
      {authLoading ? (
        <Spin size="large" />
      ) : (
        <div>
          <h1>header</h1>
          {children}
          <h1>footer</h1>
        </div>
      )}
    </>
  );
}

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import Footer from '../../Components/Footer';
import Header from '../../Components/NavBar';

import { AuthContext } from '../../Context/Authentication';
import {
  LOGIN_PAGE,
  REGISTER_PAGE,
  PROVIDER_DASHBOARD_PAGE,
} from '../../Utils/routes.constant';

import './style.css';

const { Content } = Layout;

const withoutLayout = [LOGIN_PAGE, REGISTER_PAGE, PROVIDER_DASHBOARD_PAGE];

const LayoutPage = ({ children }) => {
  const { authLoading } = useContext(AuthContext);
  const { pathname } = useLocation();

  const isWithLayout = !withoutLayout.includes(pathname);

  return (
    <>
      {authLoading ? (
        <Spin size="large" className="loading" />
      ) : (
        <>
          {isWithLayout && <Header />}
          <Content className="page">{children}</Content>
          {isWithLayout && <Footer />}
        </>
      )}
    </>
  );
};

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPage;

import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu, Row, Col, Drawer, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { AuthContext } from '../../Context/Authentication';
import Button from '../Button';
import UserInfo from '../UserInfo';
import {
  PROVIDER_DASHBOARD_PAGE,
  LOGIN_PAGE,
  HOME_PAGE,
  ORDERS_PAGE,
  ABOUT_US,
} from '../../Utils/routes.constant';

import './style.css';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const { isAuth, userData } = useContext(AuthContext);

  const { pathname } = useLocation();
  const { md } = useBreakpoint();
  const history = useHistory();

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const redirectHandler = (route) => () => {
    history.push(route);
  };

  const LeftMenu = (
    <Menu
      id="navBar-menu"
      selectedKeys={[pathname]}
      mode={md ? 'horizontal' : 'inline'}
    >
      <Menu.Item onClick={redirectHandler(HOME_PAGE)} key={HOME_PAGE}>
        Home
      </Menu.Item>
      <Menu.Item onClick={redirectHandler(ABOUT_US)} key={ABOUT_US}>
        About Us
      </Menu.Item>
      {isAuth && (
        <>
          <Menu.Item onClick={redirectHandler(ORDERS_PAGE)} key={ORDERS_PAGE}>
            Order
          </Menu.Item>
          {userData.role === 'provider' && (
            <Menu.Item
              onClick={redirectHandler(PROVIDER_DASHBOARD_PAGE)}
              key={PROVIDER_DASHBOARD_PAGE}
            >
              Dashboard
            </Menu.Item>
          )}
        </>
      )}
    </Menu>
  );

  const RightMenu = (
    <>
      {!isAuth ? (
        <Button
          handelClick={redirectHandler(LOGIN_PAGE)}
          className="sixthButton sign-in-btn"
        >
          Sign in
        </Button>
      ) : (
        <UserInfo />
      )}
    </>
  );

  return (
    <Header className="header">
      <Row>
        <Col xs={9} sm={10} md={5} lg={6}>
          <p className="logo">S-Seeker</p>
        </Col>

        <Col xs={12} sm={9} md={13} lg={12}>
          {md ? LeftMenu : RightMenu}
        </Col>

        <Col xs={3} sm={2} md={6} lg={6}>
          {md ? RightMenu : <MenuOutlined onClick={showDrawer} />}
        </Col>

        <Drawer
          title="Menu"
          placement="right"
          id="drawer-menu"
          onClose={onClose}
          visible={visible}
        >
          {LeftMenu}
        </Drawer>
      </Row>
    </Header>
  );
};

export default NavBar;

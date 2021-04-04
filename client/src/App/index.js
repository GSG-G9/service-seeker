import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  HOME_PAGE,
  LOGIN_PAGE,
  ABOUT_US,
  REGISTER_PAGE,
  ORDERS_PAGE,
  PROVIDER_DASHBOARD_PAGE,
} from '../Utils/routes.constant';

import { LoggedOutRoutes, PrivateRoutes } from './Routes';
import AuthProvider from '../Context/Authentication';
import LoginPage from '../Pages/Login';
import Layout from '../Pages/Layout';

import './style.css';

const App = () => (
  <div className="App">
    <AuthProvider>
      <Layout>
        <Switch>
          <Route exact path={HOME_PAGE}>
            Home Page
          </Route>
          <Route exact path={ABOUT_US}>
            About Us
          </Route>
          <LoggedOutRoutes exact path={LOGIN_PAGE}>
            <LoginPage />
          </LoggedOutRoutes>
          <LoggedOutRoutes exact path={REGISTER_PAGE}>
            Register Page
          </LoggedOutRoutes>
          <PrivateRoutes exact path={ORDERS_PAGE}>
            Orders Page
          </PrivateRoutes>
          <PrivateRoutes isProvider exact path={PROVIDER_DASHBOARD_PAGE}>
            Provider Dashboard Page
          </PrivateRoutes>
          <Route>Not Found 404</Route>
        </Switch>
      </Layout>
    </AuthProvider>
  </div>
);

export default App;

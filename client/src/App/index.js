import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  HOME_PAGE,
  LOGIN_PAGE,
  ABOUT_US,
  REGISTER_PAGE,
  ORDERS_PAGE,
  PROVIDER_PROFILE_PAGE,
  PROVIDER_DASHBOARD_PAGE,
} from '../Utils/routes.constant';

import 'antd/dist/antd.less';
import { LoggedOutRoutes } from './Routes';
import AuthProvider from '../Context/Authentication';
import Register from '../Pages/Register';
import LoginPage from '../Pages/Login';

import './style.css';
import Layout from '../Pages/Layout';

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
          <LoggedOutRoutes exact path={LOGIN_PAGE} component={LoginPage} />
          <LoggedOutRoutes exact path={REGISTER_PAGE} component={Register} />
          <Route exact path={ORDERS_PAGE}>
            Orders Page
          </Route>
          <Route exact path={PROVIDER_PROFILE_PAGE}>
            Provider Profile Page
          </Route>
          <Route exact path={PROVIDER_DASHBOARD_PAGE}>
            Provider Dashboard Page
          </Route>
          <Route>Not Found 404</Route>
        </Switch>
      </Layout>
    </AuthProvider>
  </div>
);

export default App;

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
import './style.css';
import Card from '../Components/Card';

const App = () => (
  <div className="App">
    <Card />
    <Switch>
      <Route exact path={HOME_PAGE}>
        Home Page
      </Route>
      <Route exact path={ABOUT_US}>
        About Us
      </Route>
      <Route exact path={LOGIN_PAGE}>
        Login Page
      </Route>
      <Route exact path={REGISTER_PAGE}>
        Register Page
      </Route>
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
  </div>
);

export default App;

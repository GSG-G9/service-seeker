import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Typography, Row, Col, Form, Alert } from 'antd';

import { HOME_PAGE, REGISTER_PAGE } from '../../Utils/routes.constant';
import { AuthContext } from '../../Context/Authentication';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import './style.css';

const { Title, Text } = Typography;

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { setIsAuth } = useContext(AuthContext);
  const history = useHistory();

  const onFinish = async ({ email, password }) => {
    console.log(isLoading);
    try {
      setIsLoading(true);
      await Axios.post('/api/v1/login', {
        email,
        password,
      });
      setIsAuth(true);
      setIsLoading(false);
      history.push(HOME_PAGE);
    } catch (err) {
      if (err.response) {
        setError(
          err.response.status === 404
            ? err.response.data.message
            : 'Something went wrong!'
        );
      }
      setIsLoading(false);
    }
  };

  return (
    <Row className="login">
      <Col className="login-left" span={15}>
        <Form name="login" onFinish={onFinish}>
          <Title id="login-left__title" level={3}>
            Service Seeker
          </Title>
          {error && <Alert id="alert" message={error} type="info" showIcon />}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter your email!',
              },
              {
                type: 'email',
                message: 'Enter a valid email!',
              },
            ]}
          >
            <label
              htmlFor="email"
              className="login-left__input"
              style={{
                paddingLeft: '42px',
              }}
            >
              Email:
              <Input placeholder="Enter your email..." />
            </label>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
              {
                min: 8,
                message: 'Password must be at least 8 characters.',
              },
            ]}
          >
            <label htmlFor="password" className="login-left__input">
              Password:
              <Input type="Password" placeholder="Enter your password..." />
            </label>
          </Form.Item>
          <Form.Item>
            <Button
              className="login-btn"
              type="primary"
              htmlType="submit"
              loading={isLoading}
            >
              login
            </Button>
            <Link className="mobile-Sign-up-btn" to={REGISTER_PAGE}>
              Sign up
            </Link>
          </Form.Item>
        </Form>
      </Col>
      <Col className="login-right" span={9}>
        <Title className="login-right__title" level={2}>
          Hello, Friend
        </Title>
        <Text className="login-right__Text" color="#FFFFFF">
          From here you can create a new account if you do not have one.
        </Text>
        <Link className="login-right__SignUp-btn" to={REGISTER_PAGE}>
          Sign up
        </Link>
        {/* <Button type="primary" className="login-right__SignUp-btn">
          Sign up
        </Button> */}
      </Col>
    </Row>
  );
};

export default LoginPage;

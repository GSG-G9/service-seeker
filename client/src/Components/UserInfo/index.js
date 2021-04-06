import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Spin, message, Typography } from 'antd';
import { LogoutOutlined, BellOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import { AuthContext } from '../../Context/Authentication';
import { HOME_PAGE } from '../../Utils/routes.constant';

import './style.css';

const { Text } = Typography;

const UserInfo = () => {
  const [isLoading, setLoading] = useState(false);
  const { userData, setRefresh, refresh, setAuthLoading } = useContext(
    AuthContext
  );
  const history = useHistory();

  const handleClick = async () => {
    try {
      setLoading(true);
      await Axios('/api/v1/logout');
      setRefresh(!refresh);
      setLoading(false);
      setAuthLoading(true);
      history.push(HOME_PAGE);
    } catch (err) {
      message.error('Something went wrong!');
      setLoading(false);
    }
  };

  return (
    <div className="logged-user-info">
      {userData ? (
        <>
          <Avatar
            shape="circle"
            srcImg={userData.avatar}
            size={44}
            style={{
              minWidth: '43px',
            }}
          />

          <Text className="user-name" ellipsis>
            {userData.username}
          </Text>
          <BellOutlined className="UserInfo-icon" />
          {isLoading ? (
            <Spin className="UserInfo-icon" />
          ) : (
            <LogoutOutlined className="UserInfo-icon" onClick={handleClick} />
          )}
        </>
      ) : (
        <spin />
      )}
    </div>
  );
};

UserInfo.propTypes = {
  handleLogout: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default UserInfo;

import React, { useContext, useState } from 'react';
import { Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import LogoutComponent from '../Logout';
import { AuthContext } from '../../Context/Authentication';

import './style.css';
import NotificationPanel from '../NotificationPanel';

const { Text } = Typography;

const UserInfo = ({ notificationData }) => {
  const { userData } = useContext(AuthContext);
  const [showNotification, setShowNotification] = useState(false);
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
          <BellOutlined
            className="UserInfo-icon"
            onClick={() => setShowNotification(!showNotification)}
          />

          <LogoutComponent dashBoard={false} />
          {showNotification && (
            <NotificationPanel notificationData={notificationData} />
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
  notificationData: PropTypes.array,
};

export default UserInfo;

import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AvatarUsers = ({ srcImg, ...rest }) => (
  <Avatar src={srcImg} icon={!srcImg ? <UserOutlined /> : null} {...rest} />
);

AvatarUsers.propTypes = {
  srcImg: PropTypes.string,
};

export default AvatarUsers;

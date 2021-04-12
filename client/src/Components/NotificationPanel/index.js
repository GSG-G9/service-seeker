/* eslint-disable operator-linebreak */
import React from 'react';
import { Col, Row, Typography, Spin } from 'antd';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';

import './style.css';

const { Text, Title } = Typography;

const NotificationPanel = ({ notificationData }) => (
  <div className="not-panel">
    {notificationData ? (
      <>
        <Title id="not-panel__title">Notifications</Title>

        {notificationData &&
          notificationData.reverse().map(({ id, description }) => (
            <Row className="not-panel__contener" key={id}>
              <Col sm={6} className="not-panel__left">
                <Avatar
                  shape="circle"
                  size={44}
                  style={{
                    minWidth: '43px',
                  }}
                />
              </Col>
              <Col sm={18} className="not-panel__right">
                <Text>{description}</Text>
              </Col>
            </Row>
          ))}
      </>
    ) : (
      <Spin />
    )}
  </div>
);
NotificationPanel.propTypes = {
  notificationData: PropTypes.array,
};

export default NotificationPanel;

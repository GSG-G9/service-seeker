import React from 'react';
import moment from 'moment';
import { CloseOutlined } from '@ant-design/icons';

import Avatar from '../../Avatar';

const getColumnsData = (onActins) => ({
  // user Order Request Columns
  userOrderReq: [
    {
      title: 'User Info',
      dataIndex: 'userInfo',
      key: 'userInfo',
      width: '18%',
      render([username, avatar]) {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Avatar
              shape="circle"
              srcImg={avatar}
              size={45}
              style={{
                minWidth: '45px',
              }}
            />
            <label
              style={{
                lineHeight: '45px',
                paddingLeft: '14px',
                width: '120px',
              }}
              ellipsis
            >
              {username}
            </label>
          </div>
        );
      },
      fixed: 'left',
    },
    {
      title: 'Service Title',
      dataIndex: 'serviceTitle',
      key: 'serviceTitle',
      width: '15%',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      width: '16%',
    },
    {
      title: 'Your Description',
      key: 'yourDescription',
      dataIndex: 'yourDescription',
      width: '30%',
    },
    {
      title: 'Date',
      key: 'date',
      dataIndex: 'date',
      width: '19%',
      render(text) {
        return moment(text).format('MMM Do YY, h:mm a');
      },
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      width: '10%',
      fixed: 'right',
      render() {
        return (
          <div onClick={onActins[0]}>
            <CloseOutlined
              style={{
                paddingLeft: '5px',
                cursor: 'pointer',
                fontSize: '21px',
                color: '#F95151',
              }}
            />
          </div>
        );
      },
    },
  ],
  // user Order Columns
  userOrder: [
    {
      title: 'User Info',
      dataIndex: 'userInfo',
      key: 'userInfo',
      width: '18%',
      render([username, avatar]) {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Avatar
              shape="circle"
              srcImg={avatar}
              size={45}
              style={{
                minWidth: '45px',
              }}
            />
            <label
              style={{
                lineHeight: '45px',
                paddingLeft: '14px',
                width: '120px',
              }}
              ellipsis
            >
              {username}
            </label>
          </div>
        );
      },
      fixed: 'left',
    },
    {
      title: 'Service Title',
      dataIndex: 'serviceTitle',
      key: 'serviceTitle',
      width: '15%',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      width: '16%',
    },
    {
      title: 'Your Description',
      key: 'yourDescription',
      dataIndex: 'yourDescription',
      width: '30%',
    },
    {
      title: 'Date',
      key: 'date',
      dataIndex: 'date',
      width: '19%',
      render: (text) => moment(text).format('MMM Do YY, h:mm a'),
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      width: '12%',
      fixed: 'right',
      render(text) {
        let color = '';
        switch (text) {
          case 'Didn’t start':
            color = '#F97272';
            break;
          case 'Finished':
            color = '#13E842';
            break;
          case 'Pause':
            color = '#332A94';
            break;
          default:
            color = '#5C5C5C';
            break;
        }
        return (
          <p
            style={{
              color,
              margin: 0,
            }}
          >
            {text}
          </p>
        );
      },
    },
  ],
});

export default getColumnsData;

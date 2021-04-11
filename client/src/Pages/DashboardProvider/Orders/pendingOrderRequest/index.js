import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import { Alert, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import errorHandel from '../../../../Utils/errorHandel';
import TableComponent from '../../../../Components/Table';

const { confirm } = Modal;

const PendingProvider = ({ refresh, ...rest }) => {
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [acceptError, setAcceptError] = useState(null);
  const [cancelError, setCancelError] = useState(null);
  const clearError = () => {
    setCancelError(null);
    setAcceptError(null);
    setError(null);
  };

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setIsLoading(true);
        clearError();
        const { data } = await Axios.get('/api/v1/provider/order-requests');

        if (unmounted) {
          setIsLoading(false);
          setOrdersData(data.data);
        }
      } catch (err) {
        errorHandel(setError, err);
        setIsLoading(false);
      }
    })();

    return () => {
      unmounted = false;
    };
  }, [refresh]);

  const handleCancelOrder = async (orderId) => {
    confirm({
      title: 'Are you sure delete this order?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        try {
          clearError();
          await Axios.delete(`/api/v1/user/order-requests/${orderId}`);
          setOrdersData(ordersData.filter(({ id }) => id !== orderId));
        } catch (err) {
          errorHandel(setCancelError, err);
        }
      },
    });
  };

  const handleAcceptOrder = async (orderId) => {
    try {
      clearError();
      await Axios.post(`/api/v1/user/order-requests/${orderId}`, {
        time: '',
      });
    } catch (err) {
      errorHandel(setAcceptError, err);
    }
  };

  const handleMoreDetails = () => {
    // open popup modal
  };

  return (
    <div>
      {error && <Alert type="error" message={error} />}
      {acceptError && <Alert type="error" message={acceptError} />}
      {cancelError && <Alert type="error" message={cancelError} />}
      <TableComponent
        ColumnsType="providerOrderPending"
        dataSource={ordersData?.map(
          ({
            username,
            avatar,
            location,
            mobile,
            state,
            description,
            date,
            id,
          }) => ({
            userinfo: [username, avatar],
            location,
            phone: mobile,
            state,
            description,
            key: id,
            time: date,
            action: id,
          })
        )}
        onActions={[handleAcceptOrder, handleCancelOrder]}
        onRowDoubleClick={handleMoreDetails}
        loading={isLoading}
        {...rest}
      />
    </div>
  );
};

PendingProvider.propTypes = {
  data: PropTypes.array.isRequired,
  handleCancelOrder: PropTypes.func.isRequired,
  handleAcceptOrder: PropTypes.func.isRequired,
  handleMoreDetails: PropTypes.func.isRequired,
  error: PropTypes.string,
  refresh: PropTypes.bool.isRequired,
};

export default PendingProvider;
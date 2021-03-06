import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Axios from 'axios';
import { Alert } from 'antd';

import Table from '../../../../Components/Table';
import StartWorkModal from './StartWorkModal';

const AcceptedOrders = ({ refresh }) => {
  const [acceptedOrders, setAcceptedOrders] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setIsLoading(true);
        setErrMsg(null);
        const { data: result } = await Axios.get('/api/v1/provider/orders');
        if (unmounted) {
          setIsLoading(false);
          setAcceptedOrders(result.data);
        }
      } catch ({ response: resError }) {
        setIsLoading(false);
        setErrMsg(resError);
      }
    })();

    return () => {
      unmounted = false;
    };
  }, [refresh]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleMoreDetails = (data) => {
    setOrderDetails(data);
    handleShowModal();
  };
  const onStateChangeOnDoubleClick = (_1, _2, record) => {
    handleMoreDetails(record);
  };
  const handleMoreDetailsOnActions = (_, record) => {
    handleMoreDetails(record);
  };
  const onStateChange = (id, state) => {
    setAcceptedOrders(
      acceptedOrders.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            state,
          };
        }
        return data;
      })
    );
  };
  return errMsg ? (
    <Alert type="error" message={errMsg} />
  ) : (
    <>
      {orderDetails && (
        <StartWorkModal
          data={{
            username: orderDetails.userinfo[0],
            location: orderDetails.location,
            date: orderDetails.time,
            description: orderDetails.description,
            mobile: orderDetails.phone,
            avatar: orderDetails.userinfo[1],
            id: orderDetails.id,
            state: orderDetails.status,
          }}
          showModal={showModal}
          onCancel={handleCloseModal}
          onStateChange={onStateChange}
        />
      )}
      <Table
        loading={isLoading}
        ColumnsType="providerAcceptedOrders"
        dataSource={acceptedOrders?.map(
          ({
            username,
            avatar,
            location,
            mobile: phone,
            state: status,
            description,
            id,
            date,
          }) => ({
            userinfo: [username, avatar],
            location,
            phone,
            status,
            description,
            key: id,
            id,
            time: date,
          })
        )}
        onActions={[handleMoreDetailsOnActions]}
        onRowDoubleClick={onStateChangeOnDoubleClick}
      />
    </>
  );
};

AcceptedOrders.propTypes = {
  refresh: PropTypes.bool.isRequired,
};

export default AcceptedOrders;

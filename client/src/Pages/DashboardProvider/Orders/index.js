import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Axios from 'axios';
import { Alert, Spin, Tabs } from 'antd';

import PendingProvider from './pending';
import errorHandel from '../../../Utils/errorHandel';

const { TabPane } = Tabs;

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await Axios.get('/api/v1/provider/order-requests');
        const { data: resData } = data;
        const sourceData = resData.reduce((acc, crr, idx) => {
          acc[idx] = {
            userinfo: [crr.username, crr.avatar],
            location: crr.location,
            phone: crr.mobile,
            state: crr.state,
            description: crr.description,
            key: crr.id,
            time: moment(crr.date).format('MMM-Do-YYYY'),
            orderId: crr.order_id,
            action: crr.order_id,
          };
          return acc;
        }, []);
        if (unmounted) {
          setIsLoading(false);
          setOrdersData(sourceData);
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

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      {error && <Alert type="error" />}
      {isLoading ? (
        <Spin />
      ) : (
        <Tabs className="order-tabs" defaultActiveKey="1" centered>
          <TabPane tab="Orders Request" key="1">
            <PendingProvider data={ordersData} refresh={handleRefresh} />
          </TabPane>
          <TabPane tab="Orders" key="2">
            <p>Nothing here, Go out!</p>
          </TabPane>
        </Tabs>
      )}
    </div>
  );
};

export default Orders;

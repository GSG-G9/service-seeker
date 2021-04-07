import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, message, Spin } from 'antd';
import './style.css';

import Axios from 'axios';
import CardContainer from '../../Components/CardContainer';
import SearchBar from '../../Components/Search';
import OrderModal from './OrderModal';

const { Title } = Typography;

const LandingPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [providers, setProvidersList] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [service, setService] = useState(null);
  const [location, setLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line object-curly-newline
  const [modalProviderData, setModalProviderData] = useState({});

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get('/api/v1/providers');
        if (unmounted) {
          setLoading(false);
          setProvidersList(data.data);
        }
      } catch (error) {
        message.error('Something went wrong!');
        setLoading(false);
      }
    })();
    return () => {
      unmounted = false;
    };
  }, []);

  const handelClear = () => {
    setSearchResult(null);
    setLocation(null);
    setService(null);
  };
  const handleSearch = () => {
    setSearchResult(
      providers
        .filter((element) => (service ? element.title === service : true))
        .filter((element) => (location ? element.location === location : true))
    );
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getProviderById = (id) => {
    setModalProviderData(providers.filter(({ id: pId }) => pId === id)[0]);
  };

  return (
    <Row type="flex" justify="center">
      <OrderModal
        visible={showModal}
        onCancel={handleCloseModal}
        data={modalProviderData}
        closeModal={handleCloseModal}
      />
      <Col span={24}>
        <Title level={2}>
          Find your <span className="fine">Service</span>
        </Title>
        <Title level={3} className="subTitle">
          To fix your Home
        </Title>
      </Col>

      <Col span={14}>
        <SearchBar
          handleService={setService}
          handleLocation={setLocation}
          handleSearch={handleSearch}
          handelClear={handelClear}
          service={service}
          location={location}
        />
      </Col>
      <Col xs={24} md={24} lg={24}>
        <Row gutter={[0, 16]} type="flex" justify="center">
          <Col>
            {isLoading ? (
              <Spin className="UserInfo-icon" />
            ) : (
              <CardContainer
                title={
                  !searchResult
                    ? 'All service'
                    : `${searchResult.length} Result `
                }
                providers={searchResult || providers}
                showModal={handleShowModal}
                getProviderById={getProviderById}
              />
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default LandingPage;

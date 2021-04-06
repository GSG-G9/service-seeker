import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { SearchOutlined, ClearOutlined } from '@ant-design/icons';
import Button from '../Button';
import Select from '../Select';

import './style.css';

import { locations, serviceTypes } from '../../Utils/data';

const SearchBar = ({
  handleSearch,
  handleService,
  handleLocation,
  handelClear,
  location,
  service,
  ...rest
}) => (
  <Row gutter={[10, 10]} className="filter-container" {...rest}>
    <Col xs={24} sm={24} md={24} lg={7}>
      <Select
        placeholder="service"
        onChange={handleService}
        options={serviceTypes}
        type="Service"
        initialValue={service}
      />
    </Col>
    <Col xs={24} sm={24} md={24} lg={1}>
      <p className="split-text">in</p>
    </Col>
    <Col xs={24} sm={24} md={24} lg={7}>
      <Select
        placeholder="location"
        onChange={handleLocation}
        options={locations}
        type="Location"
        initialValue={location}
      />
    </Col>
    <Col xs={24} sm={24} md={24} lg={5}>
      <Button
        type="primary"
        handelClick={handleSearch}
        icon={<SearchOutlined />}
        className="primaryButton searchBtn"
        disabled={!service && !location}
      >
        Search
      </Button>
    </Col>
    <Col xs={24} sm={24} md={24} lg={2}>
      <Button
        handelClick={handelClear}
        icon={<ClearOutlined />}
        className="IconButton "
        size="middle"
        disabled={!service && !location}
      >
        {' '}
      </Button>
    </Col>
  </Row>
);
SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleService: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handelClear: PropTypes.func.isRequired,
  location: PropTypes.string,
  service: PropTypes.string,
};

export default SearchBar;

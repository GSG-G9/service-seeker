import React from 'react';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';
import Button from '../Button';
import Select from '../Select';

import './style.css';

import { locations, serviceTypes } from '../../Utils/data';

const SearchBar = ({ handleSearch, handleService, handleLocation }) => (
  <div className="filter-container">
    <Select
      textDefault={serviceTypes[0]}
      handleChange={handleService}
      options={serviceTypes}
    />
    <p className="split-text">in</p>
    <Select
      textDefault={locations[0]}
      handleChange={handleLocation}
      options={locations}
    />
    <Button
      type="primaryButton"
      handelClick={handleSearch}
      icon={<SearchOutlined />}
    >
      Search
    </Button>
  </div>
);

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleService: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
};

export default SearchBar;

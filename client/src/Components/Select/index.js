import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const SelectComponent = ({ options, handleChange }) => (
  <Select
    className="filter-select"
    size="large"
    defaultValue={options[0]}
    onChange={handleChange}
  >
    {options.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ))}
  </Select>
);

SelectComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectComponent;

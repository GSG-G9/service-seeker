import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const SelectComponent = ({ options, ...rest }) => (
  <Select
    className="filter-select"
    size="large"
    defaultValue={options[0]}
    {...rest}
  >
    {options.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ))}
  </Select>
);

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectComponent;

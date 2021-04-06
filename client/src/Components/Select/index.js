import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const SelectComponent = ({ options, initialValue, ...rest }) => (
  <Select className="filter-select" size="large" value={initialValue} {...rest}>
    {options.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ))}
  </Select>
);

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialValue: PropTypes.string,
};

export default SelectComponent;

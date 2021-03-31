import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

import './style.css';

const CommonButton = ({ children, handelClick, type, ...rest }) => (
  <Button onClick={handelClick} type={type} {...rest}>
    {children}
  </Button>
);

CommonButton.propTypes = {
  children: PropTypes.string.isRequired,
  handelClick: PropTypes.func,
  type: PropTypes.string,
};

CommonButton.defaultProps = {
  type: 'primary',
  handelClick: () => {},
};

export default CommonButton;

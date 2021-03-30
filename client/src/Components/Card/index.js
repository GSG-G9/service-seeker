import React from 'react';

import { Card, Row, Col, Image } from 'antd';
import './style.css';

const CommonCard = () => (
  <Card>
    <Row gutter={[16, 16]}>
      <Col sm={24} md={6} lg={6}>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
    </Row>
  </Card>
);
export default CommonCard;

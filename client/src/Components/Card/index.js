import React from 'react';
import PropTypes from 'prop-types';

import { Card, Row, Col, Image, Typography, Rate, Avatar } from 'antd';
import './style.css';

import CommonButton from '../Button';

const { Title, Text, Paragraph } = Typography;

const CommonCard = ({
  ImageSrc,
  TitleJob,
  city,
  rate,
  priceByHour,
  descriptions,
  Name,
  avatarImage,
}) => (
  <Card className="cardStyle">
    <Row gutter={[16, 16]} type="flex" justify="start">
      <Col sm={24} md={6} lg={6}>
        <Image src={ImageSrc} className="imageStyle" />
      </Col>
      <Col sm={24} md={14} lg={14} className="cardDescription">
        <Title level={4}>{TitleJob}</Title>
        <div>
          <Rate value={rate} />
          <Text type="secondary" className="cardLocation">
            location:
            <Text>{city}</Text>
          </Text>
        </div>
        <div>
          <Text type="secondary" className="cardLocation">
            Price:
            <Text>{priceByHour}$</Text>
          </Text>
        </div>
        <Paragraph
          ellipsis={{
            rows: 24,
          }}
        >
          {descriptions}
        </Paragraph>
      </Col>
      <Col sm={24} md={4} lg={4}>
        <div className="cardHireMe">
          <div>
            <Avatar size={100} src={avatarImage} />
            <div>
              <Text>{Name}</Text>
            </div>
          </div>
          <CommonButton
            handelClick={onclick}
            type="primary"
            className="initial-style primaryButton"
          >
            Hire me
          </CommonButton>
        </div>
      </Col>
    </Row>
  </Card>
);
CommonCard.propTypes = {
  priceByHour: PropTypes.float,
  ImageSrc: PropTypes.string,
  TitleJob: PropTypes.string,
  city: PropTypes.string,
  rate: PropTypes.Integer,
  descriptions: PropTypes.string,
  Name: PropTypes.string,
  avatarImage: PropTypes.string,
};
CommonCard.defaultProps = {
  priceByHour: 17.5,
  ImageSrc:
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  avatarImage:
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  TitleJob: 'developer',
  city: 'Gaza',
  rate: 3.5,
  descriptions: 'welcome im my Job card ',
  Name: 'Reinald',
};

export default CommonCard;

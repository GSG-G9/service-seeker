import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Image, Typography, Rate } from 'antd';

import Button from '../Button';
import Avatar from '../Avatar';

import './style.css';

const { Title, Text, Paragraph } = Typography;

const CommonCard = ({
  provider: {
    id,
    username: Name,
    cover_image: ImageSrc,
    title: TitleJob,
    location: city,
    rating: rate,
    bio: descriptions,
    price_hour: priceByHour,
    avatar: avatarImage,
  },
}) => (
  <Card id={id} className="cardStyle">
    <Row gutter={[16, 16]} type="flex" justify="center">
      <Col sm={24} md={6} lg={6} className="imageContener">
        <Image src={ImageSrc} className="imageStyle" preview={false} />
      </Col>
      <Col sm={24} md={14} lg={14} className="cardDescription">
        <Title id="cardTitle" level={4}>
          {TitleJob}
        </Title>
        <div className="cardDescription__top">
          <div>
            <Text type="secondary" className="cardRating__text">
              {rate}
            </Text>
            <Rate value={rate} className="cardRating__stars" disabled />
          </div>
          <Text type="secondary" className="cardLocation">
            location:
            <Text>{city}</Text>
          </Text>
        </div>
        <div>
          <Text type="secondary" className="cardPrice">
            Price:
            <Text>{priceByHour}$</Text>
          </Text>
        </div>
        <Paragraph
          ellipsis={{
            rows: 3,
          }}
          id="cardDes"
        >
          {descriptions}
        </Paragraph>
      </Col>
      <Col sm={24} md={4} lg={4} className="cardHireContener">
        <div className="cardHireMe">
          <div>
            <Avatar size={75} className="avatarCard" srcImg={avatarImage} />
            <div>
              <Text>{Name}</Text>
            </div>
          </div>
          <Button
            handelClick={onclick}
            type="primary"
            className="initial-style fourthButton hireBtn"
          >
            Hire me
          </Button>
        </div>
      </Col>
    </Row>
  </Card>
);

CommonCard.propTypes = {
  provider: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    username: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
    price_hour: PropTypes.number,
    rating: PropTypes.number,
    cover_image: PropTypes.string,
  }).isRequired,
};

export default CommonCard;

import React from 'react';
import { Card, Row, Col, Image, Typography, Rate, Avatar } from 'antd';
import './style.css';

import CommonButton from '../Button';

const { Title, Text, Paragraph } = Typography;

const CommonCard = () => (
  <Card>
    <Row gutter={[16, 16]} type="flex" justify="start">
      <Col sm={24} md={6} lg={6}>
        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      </Col>
      <Col sm={24} md={14} lg={14} className="cardDescription">
        <Title level={4}>h3. Ant Design</Title>
        <div>
          <Rate value={4} />
          <Text type="secondary" className="cardLocation">
            location:
            <Text>Gaza</Text>
          </Text>
        </div>
        <div>
          <Text type="secondary" className="cardLocation">
            Price:
            <Text>20$</Text>
          </Text>
        </div>
        <Paragraph
          ellipsis={{
            rows: 24,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius
          elit erat odio dictum felis dolor adipiscing varius. Nisl bibendum
          orci in eleifend proin. Leo at lacus, iaculis aliquet. Felis, turpis
          dui, rhoncus massa id nisl rutrum sapien. Eu le...
        </Paragraph>
      </Col>
      <Col sm={24} md={4} lg={4}>
        <div className="cardHireMe">
          <div>
            <Avatar
              size={64}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <div>
              <Text>Name</Text>
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
export default CommonCard;

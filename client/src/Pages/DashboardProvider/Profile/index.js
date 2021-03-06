import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Form, Input, Row, Col, message, Alert, InputNumber } from 'antd';

import Button from '../../../Components/Button';
import Select from '../../../Components/Select';
import { locations, serviceTypes } from '../../../Utils/data';
import handelError from '../../../Utils/errorHandel';
import UploadImage from './uploadImage';

import './style.css';

const { TextArea } = Input;

const Profile = ({ providerDetails, userData, refresh }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = async (information) => {
    try {
      setLoading(true);
      setError(null);
      await Axios.patch('/api/v1/provider/information', information);
      setLoading(false);
      message.destroy();
      refresh();
      message.success('your information updated successfully');
    } catch (err) {
      setLoading(false);
      handelError(setError, err);
    }
  };

  return (
    <div className="profileForm">
      <Form onFinish={onFinish}>
        <Row gutter={[18, 18]} justify="center" className="profile-contener">
          <Col span={16}>
            <Form.Item
              label="Title"
              initialValue={providerDetails?.title}
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Title!',
                },
                {
                  min: 3,
                  message: 'Title must be at least 8 characters.',
                },
              ]}
            >
              <Input placeholder="please enter your Title" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Bio"
              initialValue={providerDetails?.bio}
              name="bio"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Bio!',
                },
                {
                  min: 20,
                  message: 'Bio must be at least 20 characters.',
                },
              ]}
            >
              <TextArea rows={4} placeholder="please enter your Bio" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="mobile"
              initialValue={userData?.mobile}
              name="mobile"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Mobile!',
                },
                {
                  min: 8,
                  message: 'Mobile must be at least 8 characters.',
                },
              ]}
            >
              <Input placeholder="please enter your Mobile as 059-xxxx-xxx" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label=" price/hour"
              initialValue={providerDetails?.price_hour || 5}
              name="price_hour"
            >
              <InputNumber stringMode step="0.01" />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Location"
              initialValue={userData?.location}
              name="location"
              className="location"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Location!',
                },
              ]}
            >
              <Select
                placeholder="location"
                options={locations}
                type="Location"
              />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Service"
              initialValue={providerDetails?.service_type}
              name="service_type"
              className="service"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Service!',
                },
              ]}
            >
              <Select
                placeholder="service"
                options={serviceTypes}
                type="Service"
              />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="Cover Image "
              initialValue={providerDetails?.cover_image}
              name="cover_image"
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <UploadImage
                  setRefresh={refresh}
                  image={providerDetails?.cover_image}
                />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Col className="btn-contener" span={24}>
          <Button htmlType="submit" loading={loading}>
            Save
          </Button>
        </Col>
      </Form>
      {error && <Alert type="error" message={error} />}
    </div>
  );
};

Profile.propTypes = {
  providerDetails: PropTypes.shape({
    title: PropTypes.string,
    bio: PropTypes.string,
    price_hour: PropTypes.number,
    cover_image: PropTypes.string,
    service_type: PropTypes.string,
  }).isRequired,
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    location: PropTypes.string,
    mobile: PropTypes.string,
  }).isRequired,
  refresh: PropTypes.func.isRequired,
};

export default Profile;

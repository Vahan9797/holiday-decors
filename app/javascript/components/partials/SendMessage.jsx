import { Button, Form, Input, InputNumber, Modal } from "antd";
import React, { createRef, useContext, useState, useEffect } from "react";
import { SendMessageContext } from '../../contexts/SendMessageContext';
import { UserOutlined } from "@ant-design/icons";
import {
  VALID_EMAIL_REGEX,
  VALID_TEL_NUMBER_REGEX,
  REQUIRED_FIELD_MSG,
  EMAIL_FIELD_MSG,
  MOBILE_NUMBER_FIELD_MSG,
  MIN_MAX_NAME_FIELD_MSG
} from '../../constants/variables';
import axios from 'axios';

const SendMessageModal = (props) => {
  const formRef = createRef();
  const [visible, setVisible] = useContext(SendMessageContext);

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = ({ firstName, lastName, email, telNumber, message }) => {
    console.log("SUBMITTED", email);
  }

  return (
    <>
      {visible && <Modal
        title={"Send A Message"}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form ref={formRef} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[
              {
                required: true,
                message: REQUIRED_FIELD_MSG,
              },
              {
                min: 3,
                max: 20,
                message: MIN_MAX_NAME_FIELD_MSG(3, 20)
              }
            ]}
          >
            <Input placeholder='Enter Your First Name...' />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[
              {
                required: true,
                message: REQUIRED_FIELD_MSG,
              },
              {
                min: 3,
                max: 20,
                message: MIN_MAX_NAME_FIELD_MSG(3, 20)
              }
            ]}
          >
            <Input placeholder='Enter Your Last Name...' />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              {
                required: true,
                pattern: VALID_EMAIL_REGEX,
                message: EMAIL_FIELD_MSG
              },
            ]}
          >
            <Input placeholder='Enter Your Email Address...' />
          </Form.Item>
          <Form.Item
            name="tel_number"
            label="Tel. Number"
            rules={[
              {
                required: true,
                pattern: VALID_TEL_NUMBER_REGEX,
                message: MOBILE_NUMBER_FIELD_MSG
              },
            ]}
          >
            <Input
              placeholder='Enter Your Tel Number...' />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[
              {
                required: true,
                message: REQUIRED_FIELD_MSG
              },
              {
                max: 500,
                message: 'Message must be maximum 500 characters.'
              }
            ]}
          >
            <Input.TextArea rows={5} placeholder='Enter Your Message Here (max 500 characters)...' />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>}
    </>
  );
};

export default SendMessageModal;
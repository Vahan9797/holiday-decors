import { Button, Form, Input, InputNumber, Modal } from "antd";
import React, { createRef, useContext, useState } from "react";
import { SendMessageContext } from '../contexts/SendMessageContext';

const SendMessageModal = (props) => {
  const REQUIRED_MSG = "Please fill in this field.";
  const formRef = createRef();
  const [visible, setVisible] = useContext(SendMessageContext);

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = params => {
    console.log("SUBMITTED", params);
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
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: REQUIRED_MSG,
              },
            ]}
          >
            <Input placeholder='Enter Your First Name...' />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: REQUIRED_MSG,
              },
            ]}
          >
            <Input placeholder='Enter Your Last Name...' />
          </Form.Item>
          <Form.Item
            name="telNumber"
            label="Tel. Number"
            rules={[
              {
                required: true,
                message: REQUIRED_MSG,
              },
            ]}
          >
            <Input
              type="number"
              placeholder='Enter Your Tel Number...' />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[
              {
                required: true,
                message: REQUIRED_MSG,
              },
            ]}
          >
            <Input.TextArea placeholder='Enter Your Message Here...' />
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
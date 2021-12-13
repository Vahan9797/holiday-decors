import React, { useContext, createRef } from 'react';
import { Form, Avatar, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AuthContext } from '../../contexts/AuthContext';
import { REQUIRED_FIELD_MSG, MIN_MAX_NAME_FIELD_MSG, SERVER_API_ENDPOINT } from '../../constants/variables';
import axios from 'axios';

const Login = () => {
  const [_, dispatch] = useContext(AuthContext);
  const formRef = createRef();

  const onFinish = ({ username, password }) => {
    dispatch({ type: 'isLoggingIn' });
    axios.post(SERVER_API_ENDPOINT('admin/login'), { username, password })
      .then(({ data }) => {
        dispatch({ type: 'isLoggedIn', token: data.token });
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="Login">
      <div className="login-form">
        <Avatar
          size={{ xs: 32, sm: 40, md: 48, lg: 64, xl: 80, xxl: 100 }}
          icon={<UserOutlined />}
        />
        <Form ref={formRef} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="username"
            label="Username"
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
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
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
            <Input type="password" size="large" />
          </Form.Item>
          <Button type="primary" htmlType="submit">Login</Button>
        </Form>
      </div>
    </div>
  )
}

export default Login;
import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom';

export default class Login extends Component {
    render() {

        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}

            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
			          </Button>
                    <NavLink to="/sign-up" style={{ float: 'right' }}>
                        Register Now
		    			  </NavLink>
                </Form.Item>
            </Form>
                    </div>
                </div>
            </div>
        );
    }
}

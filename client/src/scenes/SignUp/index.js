import React, { Component } from "react";

import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
export default class SignUp extends Component {
    render() {
        return (
            <Form>
                <p className='heading-style sign-up-heading'> Sign Up </p>
                <Form.Item
                    label="firstName"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >

                    <Input placeholder="First Name" />

                </Form.Item>

                <Form.Item
                    label="lastName"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >

                    <Input placeholder="Last Name" />
                </Form.Item>

                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >

                    <Input placeholder="Email" />

                </Form.Item>

                <Form.Item hasFeedback label="Password" name="password" rules={[{
                    required: true, message: 'Please input your password!',
                }, {
                    validator: this.checkConfirm,
                }]}>

                    <Input type="password" placeholder="Enter Password" />

                </Form.Item>

                <Form.Item hasFeedback label="Confirm Password" name="confirm" rules={[{
                    required: true, message: 'Please confirm your password!',
                }, {
                    validator: this.checkPassword,
                }]} >

                    <Input type="password" onBlur={this.handleConfirmBlur} placeholder="Confirm Password" />

                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign Up
			          	</Button>
                    <NavLink to="/login" style={{ float: 'right' }}>
                        Login
        			  	</NavLink>
                </Form.Item>

            </Form>
        );
    }
}
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
const Login = ({ login, isAuthenticated, loading }) => {


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    const onSubmit = async e => {
        e.preventDefault();
        // login(email, password);
        alert()
    };

  return (
    <React.Fragment>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Form onSubmit={e => onSubmit(e)}
              name="basic"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input name="email" value={email} onChange={e => onChange(e)}/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password name="password" value={password} onChange={e => onChange(e)} />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  type="Submit"
                  className="login-form-button"
                >
                  Login
                </Button>
                <NavLink to="/sign-up" style={{ float: "right" }}>
                  Register Now
                </NavLink>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Login.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, { login })(Login);

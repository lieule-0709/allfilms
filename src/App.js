import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routers/Home.js';
import GetTicket from './routers/Home.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './libs/AlertBox/style.css';
import alertMessage from './libs/AlertBox/alert';
import {
  Modal, Form, Input, Button, Checkbox, Tabs,
  Select, DatePicker
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function App() {
  // useEffect(() => {
  //   getDrinkApi({
  //     keyword: 'cam'
  //   }).then(values => console.log(values))
  // }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { TabPane } = Tabs;

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function callback(key) {
    console.log(key);
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const { Option } = Select;

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="head_content flex">
          <img className="logo" src={logo} alt="logo"></img>
          <div className="div_input">
            <input className="input" defaultValue="T??m t??n phim, di???n vi??n"></input>
            <FontAwesomeIcon icon={faSearch} size="3px" color="gray" className="icon_abs search" />
          </div>
          <div className="login">
            <label type="primary" onClick={showModal}>
              <FontAwesomeIcon icon={faUser} size="3px" className="icon_abs user" />
              Login
            </label>
            <Modal footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Login" key="1">
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="username"
                      rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                      <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>

                      <a className="login-form-forgot" href="">
                        Forgot password</a>
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                      </Button>
                    </Form.Item>
                  </Form>
                </TabPane>
                <TabPane tab="Register" key="2">
                  <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                      residence: ['zhejiang', 'hangzhou', 'xihu'],
                      prefix: '86',
                    }}
                    scrollToFirstError
                  >
                    <Form.Item
                      name="email"
                      label="E-mail"
                      rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      dependencies={['password']}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                          },
                        }),
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      name="nickname"
                      label="Nickname"
                      tooltip="What do you want others to call you?"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your nickname!',
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label="Phone Number"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your phone number!',
                        },
                      ]}
                    >
                      <Input
                        style={{
                          width: '100%',
                        }}
                      />
                    </Form.Item>

                    <Form.Item name="date-picker" label="DatePicker" {...config}>
                      <DatePicker placeholder="select birthday" />
                    </Form.Item>

                    <Form.Item
                      name="agreement"
                      valuePropName="checked"
                      rules={[
                        {
                          validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                      ]}
                      {...tailFormItemLayout}
                    >
                      <Checkbox>
                        I have read the <a href="">agreement</a>
                      </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                      <Button type="primary" htmlType="submit">
                        Register
                      </Button>
                    </Form.Item>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </div>
        </div>

        <div className="black">
          <div className="menu">
            <ul className="flex">
              <a href="/getTicket">MUA V??</a>|<a>PHIM</a>|<a>G??C ??I???N ???NH</a>|<a>S??? KI???N</a>
            |<a>R???P/GI?? V??</a>|<a>H??? TR???</a>|<a>TH??NH VI??N</a>
            </ul>
          </div>
        </div>

      </div>

      <Router>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/getTicket" conponent={GetTicket}></Route>
          <Route
            path="/" exact
            component={Home}/>
        </Switch>
      </Router>
      <footer>
        <p>C??ng Ty C??? Ph???n ALLFILMS, ?????i h???c B??ch khoa- ?????i h???c ???? N???ng, 54, Nguy???n L????ng B???ng, H??a Kh??nh B???c, Li??n Chi???u, ???? N???ng</p>
      </footer>
    </div>
  );
}

export default App;

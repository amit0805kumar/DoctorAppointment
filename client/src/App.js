import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import {loadUser} from './actions/auth'
import enUS from 'antd/lib/locale-provider/en_US';
import { ConfigProvider } from 'antd';

import Login from "./scenes/Login";
import SignUp from "./scenes/SignUp";
import AvailableDoctors from "./scenes/AvailableDoctors";
import GetEmergencyDocs from "./scenes/GetEmergencyDocs";
import { notification } from 'antd';


export const openNotificationWithIcon = (type, msg, title) => {
  notification[type]({
    message: title,
    description: msg,
  });
};


function App() {
  return (
    <Provider store={store}>
        <Router>
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/available-doctors" component={AvailableDoctors} />
                  <Route path="/emergency-doctors" component={GetEmergencyDocs} />
                  <Redirect from="*" to="/" />
                  <Route path="*" component={Login} />
                </Switch>
             </Router>

     
    </Provider >
  );
}

export default App;

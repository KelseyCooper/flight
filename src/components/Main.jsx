import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Slider from './Slider';
import Login from "../containers/Login";
import NewCustomer from '../containers/NewCustomer';
import AllData from '../containers/AllData'
import EditCustomer from '../containers/EditCustomer'
import requireAuth from '../utils/requireAuth';

class Main extends Component {
    render() {
        return <main>
            <Switch>
              <Route exact path="/" component={Slider} />
              <Route path="/login" component={Login} />
              <Route path="/new-customer" component={requireAuth(NewCustomer)} />
              <Route path="/all-data" component={AllData} />
              <Route path="/customer/:id" component={EditCustomer} />
            </Switch>
          </main>;
    }
}

export default Main;
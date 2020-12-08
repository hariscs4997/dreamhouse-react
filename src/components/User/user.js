import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Findhome from './find-home';
import Ratings from './ratings';
import './user.css'


const User = () => {
  return (
    <div className="container-fluid userDashboard">
        <div className="row">
            <div className="col-12 col-md-3">
                <Sidebar />
            </div>
            <div className="col-12 col-md-9">
                <Switch>
                    <Route path="/user/findhome" component={Findhome} />
                    <Route path="/user/dashboard" component={Dashboard} />
                    <Route path="/user/ratings" component={Ratings} />
                    <Redirect from="/user" exact to="/user/dashboard" />
                </Switch>
            </div>
        </div>
    </div>
  );
};

export default User;

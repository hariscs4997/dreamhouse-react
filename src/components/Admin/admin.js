import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Addnewclient from './add-new-client';
import Clients from './clients';
import './admin.css'


const Admin = () => {
  return (
    <div className="container-fluid admindashboard">
        <div className="row">
            <div className="col-12 col-md-3">
                <Sidebar />
            </div>
            <div className="col-12 col-md-9">
                <Switch>
                    <Route path="/admin/signupclient" component={Addnewclient}/>
                    <Route path="/admin/clients" component={Clients}/>
                    <Route path="/admin/dashboard" component={Dashboard} />
                    <Redirect from="/admin" exact to="/admin/dashboard" />
                </Switch>
            </div>
        </div>
    </div>
  );
};

export default Admin;

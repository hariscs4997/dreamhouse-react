import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Sidebar extends Component {
    render() {
        return (
            <aside>
                <ul>
                    <li>
                        <NavLink to="/admin/dashboard" activeClassName="active">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/signupclient" activeClassName="active">Sign Up New Client</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/clients" activeClassName="active">clients</NavLink>
                    </li>
                    <li>
                        <NavLink to="/clients" activeClassName="active">Subscriptions</NavLink>
                    </li>
                    <li>
                        <NavLink to="/clients" activeClassName="active">Setting</NavLink>
                    </li>
                </ul>
            </aside>
        )
    }
} 
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Sidebar extends Component {
    render() {
        return (
            <aside>
                <ul>
                    <li>
                        <NavLink to="/user/dashboard" activeClassName="active">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/findhome" activeClassName="active">Find Your Dream Haus</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/ratings" activeClassName="active">Home Ratings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/settings" activeClassName="active">Settings</NavLink>
                    </li>
                </ul>
            </aside>
        )
    }
} 
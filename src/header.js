import { faHamburger, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <header>
            <Navbar expand="md">
                <NavbarBrand href="/">
                    <FontAwesomeIcon icon={faHome} /> Dream Hous
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2 btnNav">
                    <FontAwesomeIcon  icon={faHamburger}/>
                </NavbarToggler>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Connect</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <Link to="/login" className="nav-link loginLink">Login</Link>
                            {/* <NavLink href="/" className="loginLink">Login</NavLink> */}
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}

export default Header;
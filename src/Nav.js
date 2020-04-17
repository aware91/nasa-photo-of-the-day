import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';

const NavTitle = {
    color: 'red',
    fontSize: '50px',
    fontFamily: 'Space Mono'
}

const Links = {
    color: 'white'
}

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
        <Navbar color="faded" light>
            <NavbarBrand href="index.html" className="mr-auto" style={NavTitle}>NASA</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
                <NavItem>
                <NavLink href="https://www.nasa.gov/" style={Links}>NASA Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/aware91" style={Links}>Anthony's GitHub</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
}

export default NavBar;
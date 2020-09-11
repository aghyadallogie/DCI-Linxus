import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import Logout from '../auth/Logout';
import LoginModal from '../auth/LoginModal';
import { useSelector } from 'react-redux';

export default function AppNavbar(props) {

    const [expand, setExpand] = useState(false);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const toggle = () => {
        setExpand(!expand);
    }

    return (
        <div>
            <Navbar color="secondary" dark expand="sm" >
                <Container>
                    <NavbarBrand href="/">LinxUs</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={expand} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                            

                            {
                                isAuthenticated ? <NavItem><Logout props={props} /></NavItem>
                                    : <NavItem><LoginModal /></NavItem>
                            }

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

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
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">LinxUs</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={expand} navbar>
                        <Nav className="ml-auto" navbar>
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

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
<<<<<<< HEAD
                            {
                                isAuthenticated ? <NavItem><Logout props={props} /></NavItem>
                                    : <NavItem><LoginModal /></NavItem>
                            }
=======
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
>>>>>>> 9f0a585086c6b4527714a13e87e79e1d09087e6f
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

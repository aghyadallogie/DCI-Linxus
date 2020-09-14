import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AppNavbar(props) {

    const [expand, setExpand] = useState(false);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const toggle = () => {
        setExpand(!expand);
    }

    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5" >
                <Container>
                    <NavbarBrand>
                        <NavLink><Link to="/">LinxUs</Link></NavLink>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={expand} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem style={{ display: 'flex' }}>
                                {isAuthenticated ?
                                    <>
                                        <NavLink><Link to="/logout">Logout</Link></NavLink>
                                        <NavLink><Link to="/account">Account</Link></NavLink>
                                    </> :
                                    <>
                                        <NavLink><Link to="/about">About LinxUs</Link></NavLink>
                                        <NavLink><Link to="/contact">Contact Us</Link></NavLink>
                                        <NavLink><Link to="/login" className="ml-5">Login</Link></NavLink>
                                    </>}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
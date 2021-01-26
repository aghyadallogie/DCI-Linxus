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
                    <Link to="/" style={{fontSize: "28px"}}>LinxUs</Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={expand} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem style={{ display: 'flex' }}>
                                {isAuthenticated ?
                                    <>
                                        <Link className="hover-border" to="/account">Account</Link>
                                        <Link className="hover-border ml-5" to="/logout">Logout</Link>
                                    </> :
                                    <>
                                        <Link className="hover-border" to="/about">About LinxUs</Link>
                                        <Link className="hover-border ml-5" to="/login">Login</Link>
                                    </>}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
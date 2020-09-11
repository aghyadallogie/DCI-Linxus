import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

export default function AppNavbar() {

    const [expand, setExpand] = useState(false);
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
                            
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

import React from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const NavComponent = () => {
  return <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/"}>Flight Underwear Statistics</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer exact to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem eventKey={2}>Login</NavItem>
            </LinkContainer>
            <LinkContainer to="/logout">
              <NavItem eventKey={3}>Logout</NavItem>
            </LinkContainer>
            <LinkContainer to="/all-data">
              <NavItem eventKey={4}>All Data</NavItem>
            </LinkContainer>
            <LinkContainer to="/new-data">
              <NavItem eventKey={5}>New Data</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>;
};

export default NavComponent;
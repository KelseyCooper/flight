import React from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from 'react-redux';
import { logout } from '../actions/actions_authenticate';
import logo from '../flight-logo.svg'

class NavComponent extends React.Component {

    logout(e) {
      e.preventDefault();
      this.props.logout();
    }

  render() {
    const userLinks = <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer exact to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/new-customer">
            <NavItem eventKey={5}>New Entry</NavItem>
          </LinkContainer>
          <LinkContainer to="/all-data">
            <NavItem eventKey={4}>All Data</NavItem>
          </LinkContainer>
          <LinkContainer to="/logout">
            <NavItem eventKey={3.1} onClick={this.logout.bind(this)}>Logout</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>;
    const guestLinks = (
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer exact to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/login">
            <NavItem eventKey={2}>Login</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    );

  return <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={"/"}><img src={logo} /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        {this.props.auth.isAuthenticated ? userLinks : guestLinks}
      </Navbar>
    </div>;
}
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default withRouter(connect(mapStateToProps,{ logout } )(NavComponent));
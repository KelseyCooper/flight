import React, { Component } from 'react';

import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";


class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
            email: "",
            password: ""
        },
        error: false
    };
  }

  updateValue(type, event) {
    const userCopy = JSON.parse(JSON.stringify(this.state.userInfo));
    userCopy[type] = event.target.value;
    this.setState({ userInfo: userCopy });
  }

  authenticate() {
    let error = false;
    let propertiesToCheck = ["name", "password"];
    propertiesToCheck.forEach(term => {
      if (this.state.userInfo[term] === "") {
        error = true;
      }
    });
    if (!error) {
      this.props.authenticateUser(this.state.userInfo);
    }
    this.setState({ error });
  }

  render() {
    return (
      <div className="container">
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            className={
              this.state.error && this.state.userInfo.email === "" ? "red-border" : ""
            }
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.updateValue.bind(this, "email")}
          />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="text"
            className={
              this.state.error && this.state.userInfo.password === "" ? "red-border" : ""
            }
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.updateValue.bind(this, "password")}
          />
          <Button bsStyle="info" onClick={this.authenticate.bind(this)}>
            Login
          </Button>
        </FormGroup>
      </div>
    );
  }
}

export default LoginComponent;
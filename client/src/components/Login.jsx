import React, { Component } from "react";

import LoginForm from "./LoginForm";
import EditCustomerForm from "./EditCustomerForm";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

class LoginComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       userInfo: {
  //           email: "",
  //           password: ""
  //       },
  //       error: false,
  //       errors: {}
  //   };
  // }

  // updateValue(type, event) {
  //   const userCopy = JSON.parse(JSON.stringify(this.state.userInfo));
  //   userCopy[type] = event.target.value;
  //   this.setState({ userInfo: userCopy });
  // }

  authenticate() {
    console.log('fudge');
    
    // let error = false;
    // let propertiesToCheck = ["name", "password"];
    // propertiesToCheck.forEach(term => {
    //   if (this.state.userInfo[term] === "") {
    //     error = true;
    //   }
    // });
    // if (!error) {
    //   this.setState({ errors: {} });
    //   return this.props.authenticateUser(this.state.userInfo).then(
    //     () => {
    //       // this.props.history.push("/");
    //     },
    //     ({ data }) => this.setState({ errors: data })
    //   );
    // }
    // this.setState({ error });
  }

  submit = values => {
    let error = false;
    if (!error) {
        return this.props.authenticateUser(values).then(
          () => {
            this.props.history.push("/");
          },
          ({ data }) => this.setState({ errors: data })
        );
      }
  };

  render() {
    return (
      <div className="container">
      <div className="form-container">
        {/* <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            className={
              this.state.error && this.state.userInfo.email === "" ? "red-border" : ""
            }
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.updateValue.bind(this, "email")}
          />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
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
        </FormGroup> */}
       <LoginForm onSubmit={this.submit}/>
        </div>
      </div>
    );
  }
}

export default LoginComponent;

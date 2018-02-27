import React, { Component } from "react";

import LoginForm from "./LoginForm";
import EditCustomerForm from "./EditCustomerForm";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

class LoginComponent extends Component {
  authenticate() {
    console.log("fudge");

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
    if (!values.email || !values.password ){
      error = true;
      this.props.loginUserErrorTrue();
      console.log('error true');
    }
    if (!error) {
      return this.props.authenticateUser(values).then(
        () => {
          this.props.loginUserErrorFalse();
          // this.props.history.push("/");
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <div className="form-container">
          <LoginForm onSubmit={this.submit} formError={this.props.errors.loginUserErrorBlankField}/>
        </div>
      </div>
    );
  }
}

export default LoginComponent;

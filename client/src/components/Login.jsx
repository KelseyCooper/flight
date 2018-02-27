import React, { Component } from "react";

import LoginForm from "./LoginForm";
import EditCustomerForm from "./EditCustomerForm";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

class LoginComponent extends Component {

  submit = values => {
    this.props.loginInvalidUserError(false);
    this.props.loginPasswordError(false);
    let error = false;
    if (!values.email || !values.password) {
      error = true;
      this.props.loginBlankError(true);
    }
    if (!error) {
      return this.props.authenticateUser(values).then(() => {
        this.props.loginBlankError(false);
        if (
          !this.props.errors.loginUserErrorBlankField &&
          !this.props.errors.loginInvalidUserError &&
          !this.props.errors.loginPasswordError
        ) {
          this.props.history.push("/");
        }
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="form-container">
          <LoginForm
            onSubmit={this.submit}
            blankFormError={this.props.errors.loginUserErrorBlankField}
            invalidUserFormError={this.props.errors.loginInvalidUserError}
            passwordFormError={this.props.errors.loginPasswordError}
          />
        </div>
      </div>
    );
  }
}

export default LoginComponent;

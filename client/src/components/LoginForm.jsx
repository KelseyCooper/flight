import React from "react";
import { Field, reduxForm } from "redux-form";
import OrderForm from "./OrderForm";
import { connect } from "react-redux";

let user = {};

let LoginForm = (props, ownProps) => {
  const { handleSubmit, pristine, submitting, quantity, formError } = props;
 

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component='input' type="email" placeholder="Email" />
        </div>
      </div>
      <div>
        <label>Password</label>

        <div>
          <Field
            name="password"
            component='input'
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      <div className={formError ? 'form-error' : 'none'}>
        In order to register a new customer you must input a size and color for each order.
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
LoginForm = reduxForm({
  form: "LoginForm" // a unique identifier for this form
})(LoginForm);


export default LoginForm; 
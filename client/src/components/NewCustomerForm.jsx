import React from "react";
import { Field, reduxForm } from "redux-form";
import OrderForm from "./OrderForm";
import { connect } from "react-redux";
import { Form, FormControl, FormGroup, ControlLabel, Col, Button, Tooltip, OverlayTrigger } from 'react-bootstrap'

let user = {};

const FieldInput = ({ input, meta, type, placeholder, min, max }) => {
  return (
      <FormControl
          type={type}
          placeholder={placeholder}
          min={min}
          max={max}
          value={input.value}
          onChange={input.onChange} />
  )
}

let NewCustomerForm = (props, ownProps) => {
  const { handleSubmit, pristine, submitting, quantity } = props;
  user.quantity = quantity

  function changeQuantity(e) {
    props.ChangeOrderNum(e.target.value);
  }
  let order = null;

  if (quantity === "1") {
    order = <OrderForm order={"1"} />;
  } else if (quantity === "2") {
    order = (
      <div>
        <OrderForm order={"1"} />
        <OrderForm order={"2"} />
      </div>
    );
  } else if (quantity === "3") {
    order = (
      <div>
        <OrderForm order={"1"} />
        <OrderForm order={"2"} />
        <OrderForm order={"3"} />
      </div>
    );
  } else if (quantity === "4") {
    order = (
      <div>
        <OrderForm order={"1"} />
        <OrderForm order={"2"} />
        <OrderForm order={"3"} />
        <OrderForm order={"4"} />
      </div>
    );
  } else if (quantity === "5") {
    order = (
      <div>
        <OrderForm order={"1"} />
        <OrderForm order={"2"} />
        <OrderForm order={"3"} />
        <OrderForm order={"4"} />
        <OrderForm order={"5"} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="name" component='input' type="text" placeholder="Name" />
        </div>
      </div>
      <div>
        <label>Email</label>

        <div>
          <Field
            name="email"
            component='input'
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Gender</label>
        <div>
          <Field name="gender" component="select">
            <option />
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name="age" component="select">
            <option />
            <option value="11">11-20</option>
            <option value="21">21-30</option>
            <option value="31">31-40</option>
            <option value="41">41-50</option>
            <option value="51">51-60</option>
            <option value="61">61-70</option>
            <option value="71">71-80+</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <label>Quantity</label>
        <div>
          <Field
            name="quantity"
            component="select"
            onChange={e => changeQuantity(e)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
        </div>
      </div>
      <hr />
      {order}
      
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
NewCustomerForm = reduxForm({
  form: "NewCustomerForm" // a unique identifier for this form
})(NewCustomerForm);

// You have to connect() to any reducers that you wish to connect to yourself
NewCustomerForm = connect(
  state => ({
    initialValues: user // pull initial values from account reducer
  })             // bind account loading action creator
)(NewCustomerForm)

export default NewCustomerForm; 
import React from "react";
import { Field, reduxForm } from "redux-form";

let OrderForm = (props, ownProps) => {
  return <div>
  <div>
    <label>Order #{props.order}:</label>
  </div>
  <div>
    <label>Color</label>
    <div>
      <Field name="color" component="select">
        <option />
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="grey">Grey</option>
      </Field>
    </div>
  </div>
  <div>
    <label>Size</label>
    <div>
      <Field name="size" component="select">
        <option />
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="x-large">X-Large</option>
      </Field>
    </div>
  </div>
</div>;
};

export default reduxForm({
  form: "OrderForm" // a unique identifier for this form
})(OrderForm);
import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

let user = {};

let EditOrderForm1 = (props, ownProps) => {
    const { order, size, color } = props;
    user.size = size;
    user.color = color;
    
  return (
    <div>
      <div>
        <label>Order #{order}:</label>
      </div>
      <div>
        <label>Color</label>
        <div>
          <Field name={"size"} component="select">
            <option />
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">X-Large</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Size</label>
        <div>
          {" "}
          <Field name={"color"} component="select">
            <option />
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="grey">Grey</option>
          </Field>
        </div>
      </div>
    </div>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditOrderForm1 = reduxForm({
  form: "EditOrderForm1" // a unique identifier for this form
})(EditOrderForm1);

// You have to connect() to any reducers that you wish to connect to yourself
EditOrderForm1 = connect(
  state => ({
    initialValues: user // pull initial values from account reducer
  }) // bind account loading action creator
)(EditOrderForm1);

export default EditOrderForm1;

import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

let user = {};

let SimpleEditForm = (props, ownProps) => {
  const { handleSubmit, pristine, submitting, name, email, gender, age, color, size, notes } = props;
  user.name = name;
  user.email = email;
  user.gender = gender;
  user.age = age;
  user.color = color;
  user.size = size;
  user.notes = notes;
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="name" component="input" type="text" placeholder="Name" />
        </div>
      </div>
      <div>
        <label>Email</label>

        <div>
          <Field
            name="email"
            component="input"
            type="text"
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
            <option value="11-20">11-20</option>
            <option value="21-30">21-30</option>
            <option value="31-40">31-40</option>
            <option value="41-50">41-50</option>
            <option value="51-60">51-60</option>
            <option value="61-70">61-70</option>
            <option value="71-80">71-80+</option>
          </Field>
        </div>
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
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
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
SimpleEditForm = reduxForm({
  form: "SimpleEditForm" // a unique identifier for this form
})(SimpleEditForm);

// You have to connect() to any reducers that you wish to connect to yourself
SimpleEditForm = connect(
  state => ({
    initialValues: user // pull initial values from account reducer
  })             // bind account loading action creator
)(SimpleEditForm)

export default SimpleEditForm; 
import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import EditOrderForm1 from "./EditOrderForm1";
import EditOrderForm2 from "./EditOrderForm2";
import EditOrderForm3 from "./EditOrderForm3";
import EditOrderForm4 from "./EditOrderForm4";
import EditOrderForm5 from "./EditOrderForm5";

let user1 = {};

let SimpleEditForm = (props, ownProps) => {
  const { handleSubmit, pristine, submitting, name, email, gender, age, color, size, notes, order, orderLength } = props;
  user1.name = name;
  user1.email = email;
  user1.gender = gender;
  user1.age = age;
  user1.quantity = orderLength;
  user1.notes = notes;
  
  let orderComponent = null;

  if (order.length === 1) {
    orderComponent = <EditOrderForm1 order={order[0].order_number} size={order[0].size} color={order[0].color} />;
  } else if (order.length === 2) {
    orderComponent = <div>
        <EditOrderForm1 order={order[0].order_number} size={order[0].size} color={order[0].color} />
        <EditOrderForm2 order={order[1].order_number} size={order[1].size} color={order[1].color} />
      </div>;
  } else if (order.length === 3) {
    orderComponent = <div>
        <EditOrderForm1 order={order[0].order_number} size={order[0].size} color={order[0].color} />
        <EditOrderForm2 order={order[1].order_number} size={order[1].size} color={order[1].size} />
        <EditOrderForm3 order={order[2].order_number} size={order[2].size} color={order[2].color} />
      </div>;
  } else if (order.length === 4) {
    orderComponent = <div>
        <EditOrderForm1 order={order[0].order_number} size={order[0].size} color={order[0].color} />
        <EditOrderForm2 order={order[1].order_number} size={order[1].size} color={order[1].color} />
        <EditOrderForm3 order={order[2].order_number} size={order[2].size} color={order[2].color} />
        <EditOrderForm4 order={order[3].order_number} size={order[3].size} color={order[3].color} />
      </div>;
  } else if (order.length === 5) {
    orderComponent = <div>
        <EditOrderForm1 order={order[0].order_number} size={order[0].size} color={order[0].color} />
        <EditOrderForm2 order={order[1].order_number} size={order[1].size} color={order[1].color} />
        <EditOrderForm3 order={order[2].order_number} size={order[2].size} color={order[2].color} />
        <EditOrderForm4 order={order[3].order_number} size={order[3].size} color={order[3].color} />
        <EditOrderForm5 order={order[4].order_number} size={order[4].size} color={order[4].color} />
      </div>;
  }

  return <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="name" component="input" type="text" placeholder="Name" />
        </div>
      </div>
      <div>
        <label>Email</label>

        <div>
          <Field name="email" component="input" type="text" placeholder="Email" />
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
        <label>Pairs Purchased</label>
        <div>
          <Field name="quantity" component="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
        </div>
      </div>
      {orderComponent}
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Update
        </button>
      </div>
    </form>;
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
SimpleEditForm = reduxForm({
  form: "SimpleEditForm" // a unique identifier for this form
})(SimpleEditForm);

// You have to connect() to any reducers that you wish to connect to yourself
SimpleEditForm = connect(
  state => ({
    initialValues: user1 // pull initial values from account reducer
  }) // bind account loading action creator
)(SimpleEditForm);

export default SimpleEditForm;

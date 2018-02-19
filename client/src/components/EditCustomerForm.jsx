import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

let user = {};

let SimpleEditForm = (props, ownProps) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    order,
    orderLength,
    email,
    gender,
    age,
    notes,
    name
  } = props;
  user.name = name;
  user.email = email;
  user.gender = gender;
  user.age = age;
  user.quantity = orderLength;
  user.notes = notes;

  let orderComponent = null;

  if (order.length === 1) {
    user.size0 = order[0].size;
    user.color0 = order[0].color;
    orderComponent = (
      <div>
        <div>
          <label>Order #{order.length}:</label>
        </div>
        <div>
          <label>Color</label>
          <div>
            <Field name={"size0"} component="select">
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
            <Field name={"color0"} component="select">
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="grey">Grey</option>
            </Field>
          </div>
        </div>
      </div>
    );
  } else if (order.length === 2) {
    user.size0 = order[0].size;
    user.color0 = order[0].color;
    user.size1 = order[1].size;
    user.color1 = order[1].color;
    orderComponent = <div>
        <div>
          <div>
            <label>Order #{order.length - 1}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size0"} component="select">
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
              <Field name={"color0"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Order #{order.length}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size1"} component="select">
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
              <Field name={"color1"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
      </div>;
  } else if (order.length === 3) {
     user.size0 = order[0].size;
     user.color0 = order[0].color;
     user.size1 = order[1].size;
     user.color1 = order[1].color;
     user.size2 = order[2].size;
     user.color2 = order[2].color;
    orderComponent = <div>
        <div>
          <div>
            <label>Order #{order.length - 2}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size0"} component="select">
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
              <Field name={"color0"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Order #{order.length - 1}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size1"} component="select">
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
              <Field name={"color1"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Order #{order.length}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size2"} component="select">
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
              <Field name={"color2"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
      </div>;
  } else if (order.length === 4) {
         user.size0 = order[0].size;
         user.color0 = order[0].color;
         user.size1 = order[1].size;
         user.color1 = order[1].color;
         user.size2 = order[2].size;
         user.color2 = order[2].color;
                  user.size3 = order[3].size;
                  user.color3 = order[3].color;
    orderComponent = <div>
        <div>
          <div>
            <label>Order #{order.length - 3}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size0"} component="select">
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
              <Field name={"color0"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Order #{order.length - 2}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size1"} component="select">
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
              <Field name={"color1"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Order #{order.length - 1}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size2"} component="select">
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
              <Field name={"color2"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Order #{order.length}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size3"} component="select">
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
              <Field name={"color3"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
      </div>;
  } else if (order.length === 5) {
             user.size0 = order[0].size;
             user.color0 = order[0].color;
             user.size1 = order[1].size;
             user.color1 = order[1].color;
             user.size2 = order[2].size;
             user.color2 = order[2].color;
             user.size3 = order[3].size;
             user.color3 = order[3].color;
                          user.size4 = order[4].size;
                          user.color4 = order[4].color;
    orderComponent = <div>
        <div>
          <div>
            <label>Order #{order.length - 4}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size0"} component="select">
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
              <Field name={"color0"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Order #{order.length - 3}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size1"} component="select">
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
              <Field name={"color1"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Order #{order.length - 2}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size2"} component="select">
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
              <Field name={"color2"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Order #{order.length - 1}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size3"} component="select">
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
              <Field name={"color3"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Order #{order.length}:</label>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"size4"} component="select">
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
              <Field name={"color4"} component="select">
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
      </div>;
  }

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
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Field>
        </div>
      </div>

      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      {orderComponent}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Update
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
  }) // bind account loading action creator
)(SimpleEditForm);

export default SimpleEditForm;

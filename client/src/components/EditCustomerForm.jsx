import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

let user = {};

let SimpleEditForm = (props, ownProps) => {
  const { handleSubmit, pristine, submitting, order, orderLength, email, gender, age, notes, name, orderAmount } = props;
  // console.log(orderAmount);
  
  user.name = name;
  user.email = email;
  user.gender = gender;
  user.age = age;
  user.quantity = orderLength;
  user.notes = notes;
  user.size = [];
  user.color = [];

  for (let x = 0; x < order.length; x++) {
    user.size[x] = null;
    user.color[x] = null;
    user.size[x] = order[x].size;
    user.color[x] = order[x].color;
  }

  let orderComponent = null;

  if (orderAmount == '1') {
    orderComponent = <div>
        <div>
          <label>Order #{orderAmount}:</label>
        </div>
        <div>
          <label>Size</label>
          <div>
            <Field name={"size[0]"} component="select">
              <option />
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="x-large">X-Large</option>
            </Field>
          </div>
        </div>
        <div>
          <label>Color</label>
          <div>
            <Field name={"color[0]"} component="select">
              <option />
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="grey">Grey</option>
            </Field>
          </div>
        </div>
      </div>;
  } else if (orderAmount == '2') {
    orderComponent = <div>
        <div>
          <div>
            <label>Order #{orderAmount - 1}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[0]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[0]"} component="select">
                <option />
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
            <label>Order #{orderAmount}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[1]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[1]"} component="select">
                <option />
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
      </div>;
  } else if (orderAmount == '3') {
    orderComponent = <div>
        <div>
          <div>
            <label>Order #{orderAmount - 2}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[0]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[0]"} component="select">
                <option />
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
            <label>Order #{orderAmount - 1}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[1]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[1]"} component="select">
                <option />
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
            <label>Order #{orderAmount}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[2]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[2]"} component="select">
                <option />
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
      </div>;
  } else if (orderAmount == '4') {
    orderComponent = <div>
        <div>
          <div>
            <label>Order #{orderAmount - 3}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[0]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[0]"} component="select">
                <option />
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
            <label>Order #{orderAmount - 2}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[1]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[1]"} component="select">
                <option />
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
            <label>Order #{orderAmount - 1}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[2]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[2]"} component="select">
                <option />
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
            <label>Order #{orderAmount}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[3]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[3]"} component="select">
                <option />
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="grey">Grey</option>
              </Field>
            </div>
          </div>
        </div>
      </div>;
  } else if (orderAmount == '5') {
    orderComponent = <div>
        <div>
          <div>
            <label>Order #{orderAmount - 4}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[0]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[0]"} component="select">
                <option />
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
            <label>Order #{orderAmount - 3}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[1]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[1]"} component="select">
                <option />
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
            <label>Order #{orderAmount - 2}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[2]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[2]"} component="select">
                <option />
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
            <label>Order #{orderAmount - 1}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[3]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[3]"} component="select">
                <option />
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
            <label>Order #{orderAmount}:</label>
          </div>
          <div>
            <label>Size</label>
            <div>
              <Field name={"size[4]"} component="select">
                <option />
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Color</label>
            <div>
              <Field name={"color[4]"} component="select">
                <option />
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

  function changeQuantity(e) {
    props.ChangeEditOrderNum(e.target.value);
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
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>

      <div>
        <label>Pairs Purchased</label>
        <div>
          <Field
            name="quantity"
            component="select"
            onChange={e => changeQuantity(e)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Field>
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

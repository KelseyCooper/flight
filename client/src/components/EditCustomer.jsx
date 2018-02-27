import React, { Component } from "react";
import EditCustomerForm from "./EditCustomerForm";

class EditCustomerComponent extends Component {
  componentWillMount() {
    this.props.fetchCustomer().then(data => {
      return data;
    });
  }

  submitEdit = values => {
    let error = false;
    values.id = this.props.customer.id;
    for (let x = 0; x < Number(values.quantity); x++) {
      if (
        values.size[x] === undefined ||
        values.color[x] === undefined ||
        values.size[x] === "" ||
        values.color[x] === ""
      ) {
        error = true;
      }
    }
    if (values.size.length !== values.color.length) {
      error = true;
    }
    if (!error) {
      return this.props.editCustomer(values).then(
        () => {
          this.props.editCustomerError(false);
          this.props.history.push("/all-data");
        },
        ({ data }) => this.setState({ errors: data })
      );
    } else {
      console.log("fudge");

      this.props.editCustomerError(true);
    }
  };

  render() {
    let quantity = this.props.customer.purchased || [0, 1, 2, 4, 5];
    const error = this.props.errors.editCustomerError;
    return (
      <div className="container">
        <div className="form-container">
          <EditCustomerForm
            onSubmit={this.submitEdit}
            initialValues={{
              name: this.props.customer.name,
              email: this.props.customer.email,
              gender: this.props.customer.gender,
              age: this.props.customer.age,
              notes: this.props.customer.reason_to_buy,
              quantity: quantity.length
            }}
            name={this.props.customer.name}
            email={this.props.customer.email}
            gender={this.props.customer.gender}
            age={this.props.customer.age}
            notes={this.props.customer.reason_to_buy}
            orderLength={quantity.length}
            order={quantity}
            orderAmount={this.props.amount}
            ChangeEditOrderNum={this.props.ChangeEditOrderNum}
            formError={error}
          />
        </div>
      </div>
    );
  }
}

export default EditCustomerComponent;

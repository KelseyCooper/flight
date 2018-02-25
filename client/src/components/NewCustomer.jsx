import React, { Component } from "react";
import NewCustomerForm from "./NewCustomerForm";

class NewCustomerComponent extends Component {
  submit = values => {
    let finalData = {};
    let bought = [];
    let error = false;

    finalData.name = values.name || null;
    finalData.email = values.email || null;
    finalData.gender = values.gender || null;
    finalData.age = values.age || null;
    finalData.notes = values.notes || null;
    finalData.bought = bought;

    if (values.size && values.color) {
      for (let x = 1; x <= values.quantity; x++) {
        bought.push({
          color: values.color[x],
          size: values.size[x],
          ordernum: x
        });
      }
      console.log(bought);

      for (let x = 0; x < bought.length; x++) {
        if (!bought[x].color || !bought[x].size) {
          error = true;
        }
      }
    } else {
      error = true;
    }

    if (!error) {
      return this.props.addCustomer(finalData).then(
        () => {
          error = false;
          this.props.newCustomerErrorFalse();
          this.props.history.push("/all-data");
        },
        ({ data }) => this.setState({ errors: data })
      );
    } else {
      this.props.newCustomerErrorTrue();
      error = false;
    }
  };

  render() {
    const error = this.props.errors.newCustomerError;
    return (
      <div className="container">
        <div className="form-container">
          <NewCustomerForm
            onSubmit={this.submit}
            quantity={this.props.purchasing}
            ChangeOrderNum={this.props.ChangeOrderNum}
            formError={error}
          />
        </div>
      </div>
    );
  }
}

export default NewCustomerComponent;

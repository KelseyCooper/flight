import React, { Component } from "react";
import NewCustomerForm from "./NewCustomerForm";

class NewCustomerComponent extends Component {

  submit = values => {
    console.log(values);
    
    return this.props.addCustomer(values).then(
      () => {
        this.props.history.push("/all-data");
      },
      ({ data }) => this.setState({ errors: data })
    );
  };
  

  render() {
    return (
      <div className="container">
        <div className="form-container">
          <NewCustomerForm
            onSubmit={this.submit}
            quantity={this.props.purchasing}
            ChangeOrderNum={this.props.ChangeOrderNum}
            newCustomerErrorTrue={this.props.newCustomerErrorTrue}
          />
        </div>
      </div>
    );
  }
}

export default NewCustomerComponent;

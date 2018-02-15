import React, { Component } from "react";
import NewCustomerForm from "./NewCustomerForm";

class NewCustomerComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      error: false
    };
  }

  submit = values => {
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
        <NewCustomerForm 
        onSubmit={this.submit} 
        quantity={this.props.purchasing}
        ChangeOrderNum={this.props.ChangeOrderNum}
        />
      </div>
    );
  }
}

export default NewCustomerComponent;

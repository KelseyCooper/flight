import React, { Component } from "react";
import NewCustomerForm from "./NewCustomerForm";

class NewCustomerComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      error: false
    };
  }

  submit = (values) => {
   if (!this.state.error) {
     this.setState({ errors: {} });
     return this.props.addCustomer(values).then(() => {
         // this.props.history.push("/");
       }, ({ data }) => this.setState({ errors: data }));
   }
  }


  render() {
    return (
      <div className="container">
        <NewCustomerForm onSubmit={this.submit}/>
      </div>
    );
  }
}

export default NewCustomerComponent;

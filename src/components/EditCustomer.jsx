import React, { Component } from 'react';
import EditCustomerForm from './EditCustomerForm';

class EditCustomerComponent extends Component {
  sendForm() {
    if (!this.state.error) {
      this.setState({ errors: {} });
      return this.props.addCustomer(this.state.customerInfo).then(
        () => {
          // this.props.history.push("/");
        },
        ({ data }) => this.setState({ errors: data })
      );
    }
  }

  submitEdit = values => {
    values.id = this.props.customer[0].id;
  return this.props.editCustomer(values).then(
      () => {
        this.props.history.push("/all-data");
      },
      ({ data }) => this.setState({ errors: data })
    );
  };

  render() {
    return (
      <div className="container">
        <EditCustomerForm
          onSubmit={this.submitEdit}
          name={this.props.customer[0].name}
          email={this.props.customer[0].email}
          gender={this.props.customer[0].gender}
          age={this.props.customer[0].age}
          size={this.props.customer[0].size}
          color={this.props.customer[0].color}
          notes={this.props.customer[0].notes}
        />
      </div>
    );
  }
}

export default EditCustomerComponent;
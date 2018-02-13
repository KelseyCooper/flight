import React, { Component } from 'react';
import EditCustomerForm from './EditCustomerForm';

class EditCustomerComponent extends Component {

  componentDidMount() {
    this.props.fetchCustomer();
  }
  

  sendForm() {
    if (!this.state.error) {
      this.setState({ errors: {} });
      return this.props.addCustomer(this.state.customerInfo).then(
        () => {
          this.props.history.push("/all-data");
        },
        ({ data }) => this.setState({ errors: data })
      );
    }
  }

  submitEdit = values => {
    values.id = this.props.customer.id;
  return this.props.editCustomer(values).then(
      () => {
        this.props.history.push("/all-data");
      },
      ({ data }) => this.setState({ errors: data })
    );
  };

  render() {
    console.log(this.props);
    
    return (
      <div className="container">
        <EditCustomerForm
          onSubmit={this.submitEdit}
          name={this.props.customer.name}
          email={this.props.customer.email}
          gender={this.props.customer.gender}
          age={this.props.customer.age}
          size={this.props.customer.size}
          color={this.props.customer.color}
          notes={this.props.customer.reason_to_buy}
        />
      </div>
    );
  }
}

export default EditCustomerComponent;
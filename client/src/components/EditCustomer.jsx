import React, { Component } from 'react';
import EditCustomerForm from './EditCustomerForm';

class EditCustomerComponent extends Component {

  componentWillMount() {
      this.props.fetchCustomer().then(data => {
        return data;
      })
  }

  submitEdit = values => {
    values.id = this.props.customer.id;
    console.log(values);
    
  return this.props.editCustomer(values).then(
      () => {
        this.props.history.push("/all-data");
      },
      ({ data }) => this.setState({ errors: data })
    );
  };

  render() {
    let quantity = this.props.customer.purchased || [];
    
    return (
      <div className="container">
        <EditCustomerForm
          onSubmit={this.submitEdit}
          name={this.props.customer.name}
          email={this.props.customer.email}
          gender={this.props.customer.gender}
          age={this.props.customer.age}
          notes={this.props.customer.reason_to_buy}
          orderLength={quantity.length}
          order={quantity}

        />
      </div>
    );
  }
}

export default EditCustomerComponent;
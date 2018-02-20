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
    let quantity = this.props.customer.purchased || [0, 1, 2, 4, 5];
    console.log(this.props.amount);
    
    return (
      <div className="container">
        <EditCustomerForm
          onSubmit={this.submitEdit}
          initialValues={{name: this.props.customer.name, email: this.props.customer.email, gender: this.props.customer.gender, age: this.props.customer.age, notes: this.props.customer.reason_to_buy, quantity: quantity.length }}
          name={this.props.customer.name}
          email={this.props.customer.email}
          gender={this.props.customer.gender}
          age={this.props.customer.age}
          notes={this.props.customer.reason_to_buy}
          orderLength={quantity.length}
          order={quantity}
          orderAmount={this.props.amount}
          ChangeEditOrderNum={this.props.ChangeEditOrderNum}
        />
      </div>
    );
  }
}

export default EditCustomerComponent;
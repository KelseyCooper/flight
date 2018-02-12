import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  InputGroup,
  Button
} from "react-bootstrap";

class NewCustomerComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      customerInfo: {
        name: "",
        email: "",
        gender: "male",
        age: "11-20",
        color: "black",
        size: "small",
        reason: ""
      },
      error: false
    };
  }

  //   getValidationState() {
  //     const length = this.state.value.length;
  //     if (length > 10) return 'success';
  //     else if (length > 5) return 'warning';
  //     else if (length > 0) return 'error';
  //     return null;
  //   }


  updateValue(type, event) {
    const customerCopy = JSON.parse(JSON.stringify(this.state.customerInfo));
    customerCopy[type] = event.target.value;
    this.setState({ customerInfo: customerCopy });
  }

  sendForm() {
    if (!this.state.error) {
      this.setState({ errors: {} });
      return this.props.addCustomer(this.state.customerInfo).then(() => {
          // this.props.history.push("/");
        }, ({ data }) => this.setState({ errors: data }));
    }
      
  }


  render() {
    return (
      <div className="container">
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, "name")}
            />
            <ControlLabel>Email</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.updateValue.bind(this, "email")}
              />
            </InputGroup>
            <ControlLabel>Gender</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.updateValue.bind(this, "gender")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </FormControl>
            <ControlLabel>Age</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.updateValue.bind(this, "age")}
            >
              <option value="11-20">11-20</option>
              <option value="21-30">21-30</option>
              <option value="31-40">31-40</option>
              <option value="41-50">41-50</option>
              <option value="51-60">51-60</option>
              <option value="61-70">61-70</option>
              <option value="71-80">71-80+</option>
            </FormControl>
            <ControlLabel>Color</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.updateValue.bind(this, "color")}
            >
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="grey">Grey</option>
            </FormControl>
            <ControlLabel>Size</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={this.updateValue.bind(this, "size")}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="x-large">X-Large</option>
            </FormControl>
            <ControlLabel>Purchase Reason / Aditional Notes</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="textarea"
              onChange={this.updateValue.bind(this, "reason")}
            />
          </FormGroup>
          <Button bsStyle="info" onClick={this.sendForm.bind(this)}>
          onClick
          </Button>
        </form>
      </div>
    );
  }
}

export default NewCustomerComponent;

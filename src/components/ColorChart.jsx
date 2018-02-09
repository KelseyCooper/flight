import React, { Component } from 'react';
import { RadialChart } from "react-vis";

class ColorChartComponent extends Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }

  isRed(customer) {
    return customer.color === "red";
  }
  isBlue(customer) {
    return customer.color === "blue";
  }
  isBlack(customer) {
    return customer.color === "black";
  }
  isGrey(customer) {
    return customer.color === "grey";
  }

  render() {
    const red = this.props.customers.filter(this.isRed);
    const blue = this.props.customers.filter(this.isBlue);
    const black = this.props.customers.filter(this.isBlack);
    const grey = this.props.customers.filter(this.isGrey);
    const myData = [{ label: "red", angle: red.length, subLabel: "With annotation", color: "#d12b54" }, { angle: grey.length, color: "#aeabb5" }, { angle: blue.length, color: "#2b6bd1" }, { angle: black.length, color: "#323135" }];
    return <div>
        <RadialChart data={myData} innerRadius={80} radius={150} width={400} height={400} colorType="literal" />
      </div>;
  }
}

export default ColorChartComponent;
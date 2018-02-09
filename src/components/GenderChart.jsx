import React, { Component } from "react";
import {
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
  VerticalBarSeries
} from "react-vis";

class GenderChartComponent extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  isMen(customer) {
    return customer.gender === "male";
  }
  isWomen(customer) {
    return customer.gender === "female";
  }
  isOther(customer) {
    return customer.gender === "other";
  }
  isGrey(customer) {
    return customer.color === "grey";
  }

  render() {
    const men = this.props.customers.filter(this.isMen);
    const women = this.props.customers.filter(this.isWomen);
    const other = this.props.customers.filter(this.isOther);

    const data = [{ x: "Men", y: men.length, color: "#798eaf" }, { x: "Women", y: women.length, color: "#d88fb6" }, { x: "Other", y: other.length, color: "#8fd8b3" }];
    return <div>
        <XYPlot xType="ordinal" width={400} height={400} colorType="literal">
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={data} />
        </XYPlot>
      </div>;
  }
}

export default GenderChartComponent;

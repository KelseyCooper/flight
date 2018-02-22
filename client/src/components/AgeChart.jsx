import React, { Component } from "react";
import { Table } from "react-bootstrap";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from "recharts";

class AgeChartComponent extends Component {
  componentDidMount() {
    this.props.fetchCustomerAgeData();
  }
  render() {
    return <div className="container">
        <ResponsiveContainer width="100%" height={400}>
          <RadialBarChart innerRadius={20} outerRadius={140} barSize={10} data={this.props.data}>
            <RadialBar minAngle={15} label={{ fill: "#000", position: "insideStart" }} background clockWise={true} dataKey="value" />
            <Legend iconSize={10} layout="horizontal" />
          </RadialBarChart>
        </ResponsiveContainer>
        <br />
        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
              <th>Age</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
        {this.props.data.map((item, index) => {
          return <tr key={index}>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
        })}
        </tbody>
      </Table>
      </div>;
  }
}

export default AgeChartComponent;

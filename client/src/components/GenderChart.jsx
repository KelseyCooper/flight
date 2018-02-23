import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';
import { Table } from "react-bootstrap";

class GenderChartComponent extends Component {
  componentDidMount() {
    this.props.fetchCustomersGenderData();
    }
  
  render() {
    
    return <div className="container">
        <ResponsiveContainer maxWidth="100%" height={550}>
          <BarChart data={this.props.data} margin={{ top: 100, right: 20, left: 20, bottom: 50 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" label />
          </BarChart>
        </ResponsiveContainer>
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
                  <td>{item.uv}</td>
                </tr>;
            })}
          </tbody>
        </Table>
      </div>;
  }
}

export default GenderChartComponent;

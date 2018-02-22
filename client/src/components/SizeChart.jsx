import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

class SizeChartComponent extends Component {

  componentDidMount() {
      this.props.fetchCustomerSizeData();
  }

  render() {

    return <div className="container">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart margin={{ top: 100, right: 0, left: 0, bottom: 0 }}>
            <Pie startAngle={180} endAngle={0} dataKey="value" data={this.props.data} label />
          </PieChart>
        </ResponsiveContainer>
        <br />
        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
              <th>Size</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, index) => {
              return <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.value}</td>
                </tr>;
            })}
          </tbody>
        </Table>
      </div>;
  }
}

export default SizeChartComponent;

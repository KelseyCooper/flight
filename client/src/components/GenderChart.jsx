import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Table } from "react-bootstrap";


class GenderChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.props.fetchCustomersGenderData();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: this.props.data
    });
  }

  render() {
    return <div className="container">
        <ResponsiveContainer maxWidth="100%" height={500}>
          <BarChart data={this.state.data} margin={{ top: 100, right: 50, left: 50, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" label />
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
            {this.state.data.map((item, index) => {
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

export default GenderChartComponent;

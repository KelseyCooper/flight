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
} from 'recharts'

const data = [
  { name: "Page A", uv: 4000, fill: "#8884d8" },
  { name: "Page B", uv: 3000, fill: "#000" },
  { name: "Page C", uv: 2000, fill: "#eee" }
];

class GenderChartComponent extends Component {
  componentDidMount() {
    this.props.fetchCustomersGenderData();
  }
  
  render() {
    return <div className="container">
        <ResponsiveContainer maxWidth="100%" height={500}>
          <BarChart data={data} margin={{ top: 100, right: 50, left: 50, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" label={'fude'}/>
          </BarChart>
        </ResponsiveContainer>
      </div>;
  }
}

export default GenderChartComponent;

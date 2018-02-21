import React, { Component } from "react";
import { PieChart, Pie, Cell, LabelList, ResponsiveContainer } from "recharts";

class ColroChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      colors: []
    };
  }

  componentDidMount() {
    this.props.fetchCustomerColorData();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: this.props.data,
      colors: ["#f44162", "#65686d", "#6c8ce2", "#3a3e47"]
    });
  }

  render() {
    return <div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart onMouseEnter={this.onPieEnter}>
            <Pie data={this.state.data} dataKey="value" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5}>
              {this.state.data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={this.state.colors[index % this.state.colors.length]}
                />
              ))}
              <LabelList stroke="none" offset={15} dataKey="value" position="outside" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {this.state.data.map((item, index) => {
          return <div key={index}>
              {" "}
              {item.name} {item.value}
            </div>;
        })}
      </div>;
  }
}

export default ColroChartComponent;

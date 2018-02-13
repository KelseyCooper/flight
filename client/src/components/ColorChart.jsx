import React, { Component } from "react";
import { PieChart, Pie, Cell, LabelList } from "recharts";


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
      data:this.props.data,
      colors: ["#f44162", "#65686d", "#6c8ce2", "#3a3e47"]})
  }

  render() {
    return <div>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
          <Pie data={this.state.data} dataKey="value" cx={120} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5}>
            {this.state.data.map((entry, index) => (
              <Cell
                key={index}
                fill={this.state.colors[index % this.state.colors.length]}
              />
            ))}
            <LabelList stroke="none" offset={15} dataKey="value" position="outside" />
          </Pie>
        </PieChart>
        {this.state.data.map((item, index) => {
          return (
            <div key={index}> {item.name} {item.value}</div>
          )
        })}
      </div>;
  }
}

export default ColroChartComponent;

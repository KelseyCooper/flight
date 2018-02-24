import React, { Component } from "react";
import { PieChart, Pie, Cell, LabelList, ResponsiveContainer } from "recharts";
import { Table } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

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
    console.log(this.props);

    return (
      <div className="container">
        <Doughnut
          data={this.props.data}
          options={{   }}
        />
        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
              <th>Age</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.info.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.value}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ColroChartComponent;

import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Polar } from "react-chartjs-2";

class AgeChartComponent extends Component {
  componentDidMount() {
    this.props.fetchCustomerAgeData();
  }

  generateLabels(chart) {
    chart.legend.afterFit = function () {
      var width = this.width; // guess you can play with this value to achieve needed layout
      this.lineWidths = this.lineWidths.map(function(){return width;});

    };
    // here goes original or customized code of your generateLabels callback
}
  render() {
    return (
      <div className="container">
        <Polar
          data={this.props.data}
          options={{
            legendCallback: function(chart) {
              <div>hello</div>
          },
            legend: {
              "position": "bottom"
            },
            layout: {
              padding: {
                top: 5,
                bottom: 5
              }
            }
          }}
        />
        <br />
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

export default AgeChartComponent;


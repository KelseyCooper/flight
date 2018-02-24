import React, { Component } from "react";
import { Table } from "react-bootstrap";
import {Doughnut} from 'react-chartjs-2';


class SizeChartComponent extends Component {

  componentDidMount() {
      this.props.fetchCustomerSizeData();
  }

  render() {
    console.log(this.props.data);
    
    return <div className="container">
    <Doughnut data={this.props.data} />
        <br />
        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
              <th>Size</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.info.map((item, index) => {
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

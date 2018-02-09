import { connect } from "react-redux";
import GenderChartComponent from "../components/GenderChart";
import { fetchCustomers } from "../actions/actions_customers";

const mapStateToProps = state => {
  return {
    customers: state.customers
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCustomers: () => {
      dispatch(fetchCustomers());
    }
  };
};

const ColorChart = connect(mapStateToProps, mapDispatchToProps)(
  GenderChartComponent
);

export default ColorChart;
